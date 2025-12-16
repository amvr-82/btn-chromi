"use client";
// app/page.tsx
import React from "react";
import ChromeCamButton from "./btn/chrom";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        سلام! به پروژه‌ی نکست خوش اومدی
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        این یه صفحه ساده با Tailwind CSS و Next.js هست.
      </p>
      <ChromeCamButton></ChromeCamButton>
    </main>
  );
}
