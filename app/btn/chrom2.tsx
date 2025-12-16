"use client";

import { useEffect, useRef, useState } from "react";

export default function ChromeCamButton2() {
  return (
    <div>
      <button
        className="relative px-12 py-4 rounded-full 
      bg-white/20 backdrop-blur-xl
      border border-white/30
      shadow-lg
      overflow-hidden
      transition-all duration-300
      hover:scale-105 active:scale-95"
      >
        {/* Liquid shadow */}
        <span
          className="absolute inset-0 bg-gradient-to-r 
        from-black/40 via-black/10 to-transparent
        rounded-full
        blur-xl
        opacity-80
        -translate-x-6"
        />

        {/* Glass highlight */}
        <span
          className="absolute inset-0 bg-gradient-to-b 
        from-white/40 to-transparent
        rounded-full
        opacity-60"
        />

        {/* Text */}
        <span className="relative z-10 text-gray-800 font-medium tracking-wide">
          Button
        </span>
      </button>
    </div>
  );
}
