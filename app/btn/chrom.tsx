"use client";

import { useState } from "react";

type Steam = {
  id: number;
  x: number;
  y: number;
};

export default function ChromeCamButton() {
  const [steams, setSteams] = useState<Steam[]>([]);

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

    // حذف بخار بعد از انیمیشن
    setTimeout(() => {
      setSteams((prev) => prev.filter((s) => s.id !== newSteam.id));
    }, 9000);
  };

  return (
    <div className="relative w-[260px] h-[80px]">
      <video
        src="./2_5415763304226247236.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-fill rounded-2xl blur-[2px] scale-95 z-0 threeD"
      />

      <button
        onClick={handleClick}
        className="relative w-full h-full rounded-[25px] overflow-hidden z-10
        bg-white/10 backdrop-blur-[0px] border border-white/30 shadow-inner  shadow-[0_4px_6px_#ffffff70] text-[24px] font-extrabold text-[#424242]"
      >
        Chrome Button
        {steams.map((steam) => (
          <span
            key={steam.id}
            className="absolute pointer-events-none animate-steam z-20 backdrop-blur-"
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
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
        }
        .animate-steam {
          background: radial-gradient(circle, rgba(150, 150, 150,0.9), transparent);
          border-radius: 50%;
          animation: steam 6s ease-out forwards;
            z-index: 9999;
            // clip-path: polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%);

        }
      `}</style>
    </div>
  );
}
