import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  image: string;
  location: string;
  time: string;
}

export const Hero = () => {
  const banners: Banner[] = [
    {
      image: "https://pickathon.com/wp-content/uploads/2016/01/ALVVAYS-1.jpg",
      location: "Malang, ID",
      time: "Tomorrow",
    },
    {
      image:
        "https://dynamicmedia.livenationinternational.com/o/s/z/4f334628-9a23-4910-ba0d-63a89a945f26.jpg?format=webp&width=3840&quality=75",
      location: "Karawang, ID",
      time: "8 Nov 1996",
    },
    {
      image: "https://wallpapercave.com/wp/wp2051671.png",
      location: "Surabaya, ID",
      time: "8 Nov 2012",
    },
    {
      image: "https://images5.alphacoders.com/848/thumb-1920-848901.jpg",
      location: "Boyolali, ID",
      time: "Next Year",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real slide (cloned last slide at index 0)
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHolding, setIsHolding] = useState(false); // State for click and hold
  const carouselRef = useRef<HTMLDivElement>(null);

  const autoScrollInterval = 15000; // 15 seconds

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    if (currentIndex === 0) {
      setCurrentIndex(banners.length);
    } else if (currentIndex === banners.length + 1) {
      setCurrentIndex(1);
    }
  };

  // Swipe Handlers
  const handleStart = (clientX: number) => {
    setIsSwiping(true);
    setIsHolding(true); // Set holding state
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isSwiping || !carouselRef.current || isAnimating) return;

    const deltaX = clientX - startX;
    if (deltaX > 50) {
      prevSlide();
      setIsSwiping(false);
    } else if (deltaX < -50) {
      nextSlide();
      setIsSwiping(false);
    }
  };

  const handleEnd = () => {
    setIsSwiping(false);
    setIsHolding(false); // Reset holding state
  };

  useEffect(() => {
    if (autoScrollInterval <= 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScrollInterval, banners.length]);

  const slides = [
    banners[banners.length - 1], // Cloned last slide
    ...banners,
    banners[0], // Cloned first slide
  ];

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className={`overflow-hidden relative ${
          isHolding ? "cursor-grab" : "cursor-default"
        }`}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTransitionEnd={handleTransitionEnd}
      >
        <div
          className={`flex transition-transform ${
            isAnimating ? "duration-[3000ms]" : "duration-0"
          } ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={banner.image}
                alt={`Slide ${index}`}
                className="w-full h-[600px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigasi */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-0 text-white p-2 hover:bg-opacity-5 transition h-[600px]"
      >
        <ChevronLeft size={60} className="h-full opacity-20 hover:opacity-90 transition-all duration-300 z-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent bg-opacity-0 text-white p-2 hover:bg-opacity-5 transition h-[600px]"
      >
        <ChevronRight size={60} className="h-full opacity-20 hover:opacity-90 transition-all duration-300 z-20" />
      </button>

      {/* Overlay */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 flex gap-2 cursor-default select-none flex-col sm:flex-row text-center">
        <div className="bg-main px-4 py-1 rounded-2xl bg-opacity-50 text-white">
          {banners[(currentIndex - 1 + banners.length) % banners.length].location}
        </div>
        <div className="bg-main px-4 py-1 rounded-2xl bg-opacity-50 text-white">
          {banners[(currentIndex - 1 + banners.length) % banners.length].time}
        </div>
      </div>

      {/* Indicators Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-3 h-3 rounded-full ${
              index === (currentIndex - 1 + banners.length) % banners.length
                ? "bg-white"
                : "bg-main"
            }`}
          />
        ))}
      </div>
    </div>
  );
};