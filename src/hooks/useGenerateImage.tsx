import html2canvas from "html2canvas";
import React, { useRef, useState } from "react";
import { toast } from "./use-toast";

export const useGenerateImage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handleGenerateAndShare = async () => {
    setIsGenerating(true);
    try {
      if (!invoiceRef.current) {
        throw new Error("Invoice element not found");
      }

      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2, // Increase resolution
        backgroundColor: "#ffffff", // Ensure white background
        logging: false, // Disable logging for cleaner console
        useCORS: true, // Enable CORS for loading images
      });
      const imageDataUrl = canvas.toDataURL("image/png");

      // Convert Data URL to a Blob
      const response = await fetch(imageDataUrl);
      const blob = await response.blob();
      const file = new File([blob], "invoice.png", { type: "image/png" });

      // Check if Web Share API is available
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Invoice",
          text: "Check out this invoice!",
          files: [file],
        });
        toast({
          title: "Success",
          description: "Invoice image shared successfully!",
        });
      } else {
        throw new Error(
          "Sharing not supported on this browser. Try downloading instead."
        );
      }
    } catch (error) {
      console.error("Error sharing invoice image:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to share invoice image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    handleGenerateAndShare,
    isGenerating,
    invoiceRef,
  };
};
