"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // アイコン（自由に変更可）

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // 300px以上スクロールされたら表示
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
