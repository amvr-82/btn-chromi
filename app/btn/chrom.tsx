"use client";

import { useEffect, useRef, useState } from "react";

type Steam = {
  id: number;
  x: number;
  y: number;
};

export default function ChromeCamButton() {
  const [steams, setSteams] = useState<Steam[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 🎥 گرفتن تصویر از وب‌کم
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Webcam access denied:", err);
      });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSteam: Steam = {
      id: Date.now(),
      x,
      y,
    };

    setSteams((prev) => [...prev, newSteam]);

    setTimeout(() => {
      setSteams((prev) => prev.filter((s) => s.id !== newSteam.id));
    }, 9000);
  };

  return (
    <div className="relative w-[260px] h-[80px]">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-fill rounded-2xl blur-[3px] scale-95 z-0"
      />

      <button
        onClick={handleClick}
        className="relative w-full h-full rounded-[25px] overflow-hidden z-10
        bg-white/10 backdrop-blur-[2px] border border-white/30
        shadow-inner shadow-[0_4px_6px_#ffffff70]
        text-[24px] font-extrabold text-[#424242]"
      >
        Chrome Button
        {steams.map((steam) => (
          <span
            key={steam.id}
            className="absolute pointer-events-none animate-steam z-20"
            style={{
              left: steam.x,
              top: steam.y,
              width: 150,
              height: 150,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </button>

      <style>{`
        @keyframes steam {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }
          30% {
            opacity: 0.45;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.6);
          }
        }

        .animate-steam {
          background: radial-gradient(
            circle,
            rgba(220,220,220,0.8),
            rgba(200,200,200,0.4),
            transparent
          );
          filter: blur(6px);
          border-radius: 50%;
          animation: steam 6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
