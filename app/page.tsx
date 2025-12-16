"use client";
import React from "react";
import ChromeCamButton from "./btn/chrom";
import chrom2 from "./btn/chrom2";
import ChromeCamButton2 from "./btn/chrom2";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="text-lg text-gray-700 mb-6">
        این یه صفحه ساده با Tailwind CSS و Next.js هست.
      </p>
      <ChromeCamButton></ChromeCamButton>
      <br />
      <br />
      <br />
      <ChromeCamButton2></ChromeCamButton2>
    </main>
  );
}
