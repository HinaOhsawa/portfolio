"use client";

import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { Button } from "./ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 背景スクロール禁止
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-zinc-900 p-6 rounded w-full max-w-3xl shadow-lg max-h-[90vh] overflow-y-auto text-gray-600"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-800"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          <Button variant="outline" onClick={onClose} className="m-auto mt-6">
            閉じる
          </Button>
        </div>
      </div>
    </div>
  );
}
