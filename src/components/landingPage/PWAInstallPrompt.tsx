"use client";
import { Button } from "@/components/ui/button";
import { usePWAInstallPrompt } from "@/hooks/usePWAInstallPrompt";

const PWAInstallPrompt = () => {
  const { deferredPrompt, handleInstallClick } = usePWAInstallPrompt();

  if (!deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        onClick={handleInstallClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Install App
      </Button>
    </div>
  );
};

export default PWAInstallPrompt;
