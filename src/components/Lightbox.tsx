/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface LightboxProps {
  photos: Photo[];
  selectedPhoto: Photo;
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export function Lightbox({
  photos,
  selectedPhoto,
  onClose,
  onNavigate,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") navigateTo("prev");
      if (event.key === "ArrowRight") navigateTo("next");
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const navigateTo = useCallback(
    (direction: "prev" | "next") => {
      const currentIndex = photos.findIndex(
        (photo) => photo.id === selectedPhoto.id
      );
      const newIndex =
        direction === "prev"
          ? (currentIndex - 1 + photos.length) % photos.length
          : (currentIndex + 1) % photos.length;
      onNavigate(photos[newIndex]);
    },
    [photos, selectedPhoto, onNavigate]
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
        {/* <button
          onClick={() => navigateTo("prev")}
          className="absolute left-4 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button> */}
        <Image
          src={selectedPhoto?.src || "/placeholder.svg"}
          alt={selectedPhoto?.alt}
          width={800}
          height={800}
          className="max-w-full max-h-full p-2 rounded-md object-center"
        />
        {/* <button
          onClick={() => navigateTo("next")}
          className="absolute right-4 text-white hover:text-gray-300 focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button> */}
      </div>
    </div>
  );
}
