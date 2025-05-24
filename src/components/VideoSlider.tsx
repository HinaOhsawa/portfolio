// components/VideoSlider.tsx
"use client";

import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const videos = [
  "/videos/video_1.mp4",
  "/videos/video_2.mp4",
  "/videos/video_3.mp4",
  "/videos/video_4.mp4",
  "/videos/video_5.mp4",
  "/videos/video_6.mp4",
  "/videos/video_7.mp4",
];

export default function VideoSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 2.5, spacing: 16 },
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1.5, spacing: 8 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.5, spacing: 10 },
      },
    },
  });

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  // 動画が画面に見えていたら再生
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // 再生できない場合もある
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 1,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sliderRef} className="mt-6 keen-slider px-[15%] sm:px-[10%]">
      {videos.map((src, index) => (
        <div className="keen-slider__slide" key={index}>
          <video
            src={src}
            ref={(el) => {
              if (el) videoRefs.current[index] = el;
            }}
            controls
            muted
            loop
            playsInline
            className="w-auto  h-auto max-h-[480px] rounded shadow"
          />
        </div>
      ))}
    </div>
  );
}
