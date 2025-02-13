"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export function CountdownModal({
  onComplete,
  toggle,
  isOpen,
}: CountdownModalProps) {
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

  const handleOpenChange = (open: boolean) => {
    toggle(open);
    if (open) {
      const now = new Date();
      const timeDiff = LAUNCH_DATE.getTime() - now.getTime();
      setTimeLeft(Math.max(0, Math.floor(timeDiff / 1000)));
    }
  };

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  const progress = 1 - timeLeft / YEAR_IN_SECONDS;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="submit"
          className={`w-full  h-[52px] text-base font-normal`}
        >
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primary text-white">
        <DialogHeader>
          <DialogTitle>Countdown to our lunching 🤗🤗</DialogTitle>
          <DialogDescription>
            Time remaining until February 24, {LAUNCH_DATE.getFullYear()}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="relative w-64 h-64">
            <motion.div
              className="absolute inset-0 border-4 border-white rounded-full"
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
                  <div className="text-4xl font-bold mb-2">
                    {days.toString().padStart(2, "0")}:
                    {hours.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Days : Hours : Minutes : Seconds
                  </p>
                </>
              ) : (
                <div className="text-2xl font-bold text-primary">
                  It's February 24th!
                </div>
              )}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Target Date: February 24, {LAUNCH_DATE.getFullYear()}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface CountdownModalProps {
  onComplete?: () => void;
  isOpen: boolean;
  toggle: (isOpen: boolean) => void;
}
