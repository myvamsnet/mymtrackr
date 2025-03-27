"use client";
import { useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation"; // Note: Using next/navigation instead of next/router
import { useLogout } from "./useLogout";

const DEFAULT_LOGOUT_TIME = 45 * 60 * 1000; // 45 minutes

const useInactivityTimer = (logoutTime: number = DEFAULT_LOGOUT_TIME) => {
  const { handleLogout } = useLogout();
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    console.log("Activity detected - resetting timer");

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      console.log("Inactivity timeout reached - logging out");
      handleLogout();
    }, logoutTime);
  }, [logoutTime, handleLogout]);

  useEffect(() => {
    console.log("Setting up inactivity timer");

    const events = [
      "mousedown",
      "mousemove",
      "keydown",
      "keypress",
      "scroll",
      "touchstart",
      "click",
      "wheel",
    ];

    // Add event listeners
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    // Handle visibility changes (tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resetTimer();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initialize timer
    resetTimer();

    // Cleanup function
    return () => {
      console.log("Cleaning up inactivity timer");
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [resetTimer]);

  return { resetTimer };
};

export default useInactivityTimer;
