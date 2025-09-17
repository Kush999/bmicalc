"use client";

import { useEffect, useRef } from "react";

interface AdSidebarProps {
  slot: string;
  className?: string;
}

export function AdSidebar({ slot, className = "" }: AdSidebarProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current && typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.log("AdSense error:", error);
      }
    }
  }, []);

  return (
    <div className={`ad-container ad-sidebar ${className}`}>
      <div className="ad-placeholder">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: "block",
            width: "300px",
            height: "250px",
          }}
          data-ad-client="ca-pub-8004585225313485"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
