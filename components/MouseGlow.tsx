"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isClient || !mousePosition) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300">
      {/* Dynamic Fluorescent Glowing Aura following cursor */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(255, 140, 0, 0.18) 0%, rgba(255, 180, 0, 0.09) 30%, rgba(255, 100, 0, 0.03) 60%, transparent 80%)",
          filter: "blur(18px)",
        }}
      />
      {/* Inner fluorescent core light */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: "120px",
          height: "120px",
          background:
            "radial-gradient(circle, rgba(255, 200, 50, 0.25) 0%, rgba(255, 120, 0, 0.1) 50%, transparent 80%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
