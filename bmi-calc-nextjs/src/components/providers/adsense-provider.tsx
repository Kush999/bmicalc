"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProviderProps {
  children: React.ReactNode;
}

export function AdSenseProvider({ children }: AdSenseProviderProps) {
  useEffect(() => {
    // Initialize AdSense ads after component mounts
    const initializeAdSense = () => {
      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          const adElements = document.querySelectorAll(".adsbygoogle");
          adElements.forEach((adElement) => {
            const rect = adElement.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
          });
        }
      } catch (error) {
        console.log("AdSense initialization error:", error);
      }
    };

    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeAdSense);
    } else {
      // Add a small delay to ensure containers are rendered
      setTimeout(initializeAdSense, 100);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", initializeAdSense);
    };
  }, []);

  return <>{children}</>;
}
