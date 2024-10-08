"use client";
import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

export const useCopyToClipboard = (): [CopyFn, CopiedValue] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const doCopy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  return [doCopy, copiedText];
};
