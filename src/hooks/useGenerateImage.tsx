import html2canvas from "html2canvas";
import React, { useRef, useState } from "react";
import { toast } from "./use-toast";

export const useGenerateImage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handleGenerateAndDownload = async () => {
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

      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = imageDataUrl;
      downloadLink.download = "invoice.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      toast({
        title: "Success",
        description: "Invoice image generated and download started!",
      });
    } catch (error) {
      console.error("Error generating invoice image:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to generate invoice image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };
  return {
    handleGenerateAndDownload,
    isGenerating,
    invoiceRef,
  };
};
