"use client";
import { useEffect, useRef, useState } from "react";

export default function ChromeCamButton() {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);
  const [steam, setSteam] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        console.log("Stream received:", stream); // اضافه کن برای تست
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Webcam error:", err));
  }, []);

  const handleClick = (e) => {
    setSteam(true);

    setTimeout(() => {
      setSteam(false);
    }, 15000);
  };

  return (
    <div className="bg-[#555555] flex justify-center my-50 p-10">
      <div className="relative w-[260px] h-[80px]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-2xl blur-xl scale-110 z-0"
        />

        {/* chrome button */}
        <button
          ref={buttonRef}
          className="chrome-btn relative w-full h-full rounded-2xl overflow-hidden"
        >
          <span className="relative z-10 text-white font-medium tracking-wide">
            click me{" "}
          </span>

          {steam && <span className="steam-layer" />}
        </button>
      </div>
    </div>
  );
}
