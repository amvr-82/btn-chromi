// app/btn/ChromeCamButton.tsx
"use client"; // حتماً اینجا

import { useEffect, useRef, useState } from "react";

export default function ChromeCamButton() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [steam, setSteam] = useState(false);

  // useEffect(() => {
  //   if (!navigator.mediaDevices) return;
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then((stream) => {
  //       if (videoRef.current) videoRef.current.srcObject = stream;
  //     })
  //     .catch(console.error);
  // }, []);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = "https://www.insecam.org/en/view/123456/"; // فقط نمونه
      videoRef.current.play();
    }
  }, []);

  const handleClick = () => {
    setSteam(true);
    setTimeout(() => setSteam(false), 15000);
  };

  return (
    <div className="relative w-[260px] h-[80px] bg-[#55555]">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-2xl blur-xl scale-110 z-0"
      />
      <button
        onClick={handleClick}
        className="relative w-full h-full rounded-2xl overflow-hidden z-10 bg-white/10 backdrop-blur-lg border border-white/30"
      >
        Chrome Button
        {steam && (
          <span className="absolute inset-0 rounded-2xl bg-white/30 pointer-events-none animate-steam z-20" />
        )}
      </button>
      <style jsx>{`
        @keyframes steam {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.2);
            transform: translateX(0) scale(0.2);
          }
          30% {
            opacity: 0.3;
            transform: scale(0.25);
            transform: scale(0.25);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.3);
            transform: scale(0.3);
          }
        }
        .animate-steam {
          animation: steam 20s forwards;
        }
      `}</style>
    </div>
  );
}
