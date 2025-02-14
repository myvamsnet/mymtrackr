"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "./ui/Modal";
import Link from "next/link";

function getNextFebruary24(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const targetDate = new Date(year, 1, 24); // Month is 0-indexed, so 1 is February

  if (now > targetDate) {
    // If we've passed Feb 24 this year, target next year
    targetDate.setFullYear(year + 1);
  }

  return targetDate;
}

const LAUNCH_DATE = getNextFebruary24();
const YEAR_IN_SECONDS = 365.25 * 24 * 60 * 60; // Approximate seconds in a year

export function CountdownModal({ onComplete, isOpen }: CountdownModalProps) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = LAUNCH_DATE.getTime() - now.getTime();
      const newTimeLeft = Math.max(0, Math.floor(timeDiff / 1000));
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        onComplete?.();
      }
    };

    updateCountdown(); // Initial update
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onComplete]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const progress = 1 - timeLeft / YEAR_IN_SECONDS;

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      title="MTrackr is coming"
      closeOutside={true}
    >
      <div className="space-y-2 text-center">
        <h2 className="text-xl text-primary font-medium text-pretty capitalize">
          Countdown to our lunching 🤗🤗
        </h2>
        <h4 className="text-sm text-dark-200">
          Time remaining until February 24, {LAUNCH_DATE.getFullYear()}
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="relative w-64 h-64">
          <motion.div
            className="absolute inset-0 border-4 border-white bg-gradient-to-r from-indigo-500 via-blue-500 to-[#FFA500] rounded-full text-white "
            style={{
              pathLength: progress,
              rotate: -90,
            }}
            animate={{ pathLength: progress }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {timeLeft > 0 ? (
              <>
                <div className="text-4xl font-bold mb-3 text-white">
                  {days.toString().padStart(2, "0")}:
                  {hours.toString().padStart(2, "0")}:
                  {minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")}
                </div>
                <p className="text-sm text-muted-foreground text-white">
                  Days : Hours : Minutes : Seconds
                </p>
              </>
            ) : (
              <div className="text-2xl font-bold ">
                It&apos;s February 24th!
              </div>
            )}
          </div>
        </div>
        <div className=" text-center grid gap-2">
          <p className="mt-4 text-sm text-muted-foreground">
            Target Date: February 24, {LAUNCH_DATE.getFullYear()}
          </p>
          <Link href={"/"} className="text-primary font-bold text-xl">
            Go Home Page
          </Link>
        </div>
      </div>
    </Modal>
  );
}

interface CountdownModalProps {
  onComplete?: () => void;
  isOpen: boolean;
}
