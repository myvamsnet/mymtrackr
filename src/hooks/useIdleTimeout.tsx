"use client";
import { useEffect, useRef } from "react";
import { useLogout } from "./useLogout";

// Define the types for the function and idleTime
const useIdleTimeout = (idleTime: number = 1000 * 60 * 60) => {
  const { handleLogout } = useLogout();
  // Specify the type for timeoutRef to be either number (for setTimeout) or null
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      handleLogout(); // Call the logout function
    }, idleTime);
  };

  const handleActivity = () => {
    resetTimeout(); // Reset the timer on user activity
  };

  useEffect(() => {
    // Set up event listeners for user activity
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("click", handleActivity);

    // Initialize the timer
    resetTimeout();

    return () => {
      // Clean up the event listeners and timeout on component unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, [handleActivity, resetTimeout]);

  return null; // Ensure the hook doesn't return any values
};

export default useIdleTimeout;
