import html2canvas from "html2canvas";
import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";

export const useGenerateImage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const handleGenerateAndDownload = async () => {
    setIsGenerating(true);
    if (invoiceRef.current) {
      try {
        const dataUrl = await toPng(invoiceRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "receipt.png";
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
      } finally {
        setIsGenerating(false);
      }
    }
  };

  return {
    handleGenerateAndDownload,
    isGenerating,
    invoiceRef,
  };
};
