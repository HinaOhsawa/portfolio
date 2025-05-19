"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ImageSlider({ images }: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 8,
        },
      },
    },
  });

  // 自動再生処理
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider) {
        slider.current?.next();
      }
    }, 3000); // 3秒ごと

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div
      ref={(node) => {
        sliderRef.current = node;
        sliderInstanceRef(node);
      }}
      className="keen-slider mt-6"
    >
      {images.map((src, index) => (
        <div
          className="keen-slider__slide relative aspect-square rounded overflow-hidden"
          key={index}
        >
          <Image
            src={src}
            alt={`Slide ${index}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
