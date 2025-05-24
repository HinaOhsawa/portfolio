"use client";

import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 実際は fetch 完了や画像読み込みで判定
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <span className="animate-spin w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full"></span>
      </div>
    );
  }
}
