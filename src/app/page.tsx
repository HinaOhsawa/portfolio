"use client";

import Header from "@/components/Header";
import MainVisual from "@/components/MainVisual";
import Profile from "@/components/Profile";
import Works from "@/components/Works";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainVisual />
      <div className="mx-auto max-w-5xl py-8 px-4 sm:px-6">
        <Works />
        <Profile />
      </div>
    </>
  );
}
