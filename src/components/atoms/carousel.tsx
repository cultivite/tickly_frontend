import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode[];
  itemsToShow?: number;
}

const TRANSLATE_AMOUNT = 500;

const Carousel: React.FC<CarouselProps> = ({ children, itemsToShow = 3 }) => {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate]);

  const nextSlide = () => {
    setTranslate((translate) => {
      const newTranslate = translate + TRANSLATE_AMOUNT;
      const edge = containerRef.current?.scrollWidth || 0;
      const width = containerRef.current?.clientWidth || 0;

      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  };

  const prevSlide = () => {
    setTranslate((translate) => {
      const newTranslate = translate - TRANSLATE_AMOUNT;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-4 transition-transform duration-1000 w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / itemsToShow}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-main from-50% to-transparent w-24 h-full flex items-center">
          <button
            className="p-2 h-full bg-gray-500 bg-opacity-0 hover:bg-opacity-5 transition-colors duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft size={48} className="h-full opacity-5 hover:opacity-50 transition-all duration-300" />
          </button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-main from-50% to-transparent w-24 h-full flex items-center justify-end">
          <button
            className="p-2 h-full bg-gray-500 bg-opacity-0 hover:bg-opacity-5 transition-colors duration-300"
            onClick={nextSlide}
          >
            <ChevronRight size={48} className="h-full opacity-5 hover:opacity-50 transition-all duration-300"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;