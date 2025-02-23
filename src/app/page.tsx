"use client";

import Category from "@/components/molecules/Category";
import { Card1 } from "@/components/molecules/card1";
import { Card2 } from "@/components/molecules/card2";
import { Footer } from "@/components/molecules/footer";
import { Header } from "@/components/molecules/header";
import { Hero } from "@/components/molecules/heroBanner";
import { Social } from "@/components/molecules/social";

export default function Home() {
  return (
    <div className="bg-main min-h-screen text-white select-none">
      <Header />
      {/* Hero Banner */}
      <div className="-translate-y-16 w-full -mb-16">
        <Hero />
      </div>
      {/* Last Minutes */}
      <div className="-translate-y-10 bg- bg-gradient-to-b from-transparent to-main h-10 -mb-10"></div>
      <div className="px-5">
        <div className="text-3xl font-extrabold">Last Minutes...</div>
        <div className="font-semibold">
          Will be held very soon.. Get your ticket now!{" "}
        </div>
      </div>
      <Card1 />
      {/* Categories */}
      <div className="px-5 py-2 mb-4">
        <Category />
      </div>
      {/* Popular */}
      <div className="px-5">
        <div className="text-3xl font-extrabold">Popular...</div>
        <div className="font-semibold">
          Don’t miss these events and be FOMO free!
        </div>
      </div>
      <Card2 />
      {/* Upcoming */}
      <div className="px-5">
        <div className="text-3xl font-extrabold">Upcoming...</div>
        <div className="font-semibold">
          Save your money.. don’t miss the selling date!{" "}
        </div>
      </div>
      <Card1 />
      {/* Past Events */}
      <div className="px-5 sm:w-3/4 mx-auto mt-10">
        <div className="text-3xl font-extrabold">Past Events...</div>
        <div className="font-semibold">
          Take a glimpse at the excitement that has been brought before!
        </div>
      </div>
      <Social />
      <Footer />
    </div>
  );
}
