import { AlignJustify, Search } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between p-4 sm:px-10 top-0 sticky z-30 h-16 items-center transition-colors duration-[2500ms] ${
        isScrolled ? "bg-main bg-opacity-90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a href="/" className="font-bold text-3xl text-white bg-main rounded-full bg-opacity-10 px-2">
        TICKLY
      </a>
      <div className="flex gap-5 items-center ">
        <a href="" className="bg-main rounded-full bg-opacity-10 p-1 hover:scale-110 transition-all duration-300">
          <Search className="text-white" />
        </a>
        <a href="" className="bg-main rounded-full bg-opacity-10 p-1 hover:scale-110 transition-all duration-300">
          <AlignJustify className="text-white" />
        </a>
      </div>
    </header>
  );
};