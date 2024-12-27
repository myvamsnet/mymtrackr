import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import useInvoiceAndReceiptStore from "@/zustand/invoiceAndReceiptStore";
import { generateReferralCode } from "@/lib/helper/generateReferralCode";

export const useGenerateImage = () => {
  const { invoiceAndReceiptData } = useInvoiceAndReceiptStore();
  const [isGenerating, setIsGenerating] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const invoiceAndReceipt =
    invoiceAndReceiptData && invoiceAndReceiptData?.type === "invoices"
      ? `invoice${generateReferralCode()}`
      : `receipt${generateReferralCode()}`;

  const handleGenerateAndDownload = async () => {
    if (invoiceRef.current) {
      setIsGenerating(true);
      try {
        const dataUrl = await toPng(invoiceRef.current, {
          cacheBust: true, // Prevents caching issues
          width: invoiceRef.current.offsetWidth, // Ensures proper width
          height: invoiceRef.current.offsetHeight, // Ensures proper height
        });

        // Download the receipt as an image
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${invoiceAndReceipt}.png`;
        link.click();

        // Convert dataUrl to Blob for sharing
        const response = await fetch(dataUrl);
        const blob = await response.blob();

        // Check if Web Share API is supported
        if (
          navigator.canShare &&
          navigator.canShare({
            files: [
              new File([blob], `${invoiceAndReceipt}.png`, { type: blob.type }),
            ],
          })
        ) {
          const file = new File([blob], `${invoiceAndReceipt}.png`, {
            type: blob.type,
          });
          await navigator.share({
            files: [file],
            title: invoiceAndReceipt,
            text: `Here is your ${
              invoiceAndReceiptData &&
              invoiceAndReceiptData?.type === "invoices"
                ? "invoice"
                : "receipt"
            }!`,
          });
        } else {
          // Fallback to WhatsApp sharing
          const encodedMessage = encodeURIComponent(
            `Here is your ${
              invoiceAndReceiptData &&
              invoiceAndReceiptData?.type === "invoices"
                ? "invoice"
                : "receipt"
            }!`
          );
          const shareUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
          window.open(shareUrl, "_blank");
        }
      } catch (error) {
        console.error("Error generating image or sharing:", error);
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
