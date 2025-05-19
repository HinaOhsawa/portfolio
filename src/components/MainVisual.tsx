"use client";

import dynamic from "next/dynamic";

// SSR無効化（Canvas使用のため）
const BlobBackground = dynamic(() => import("@/components/Blob"), {
  ssr: false,
});

export default function MainVisual() {
  return (
    <>
      {/* 3D背景 */}
      <div className="relative h-screen w-full ">
        <div className="absolute inset-0 z-0">
          <BlobBackground />
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-6">
            Explore my world of frontend & 3D development
          </p>
        </div>
      </div>
    </>
  );
}
