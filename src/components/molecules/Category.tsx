import React from "react";

import { Music, Palette, Trophy, Gamepad, Smile, Utensils } from "lucide-react";
import Carousel from "../atoms/carousel";

const categories = [
  { name: "Music", icon: <Music className="w-8 h-8" /> },
  { name: "Art", icon: <Palette className="w-8 h-8" /> },
  { name: "Sports", icon: <Trophy className="w-8 h-8" /> },
  { name: "Hobby", icon: <Gamepad className="w-8 h-8" /> },
  { name: "Comedy", icon: <Smile className="w-8 h-8" /> },
  { name: "Culinary", icon: <Utensils className="w-8 h-8" /> },
  { name: "Music", icon: <Music className="w-8 h-8" /> },
  { name: "Art", icon: <Palette className="w-8 h-8" /> },
  { name: "Sports", icon: <Trophy className="w-8 h-8" /> },
  { name: "Hobby", icon: <Gamepad className="w-8 h-8" /> },
  { name: "Comedy", icon: <Smile className="w-8 h-8" /> },
  { name: "Culinary", icon: <Utensils className="w-8 h-8" /> },
  { name: "Music", icon: <Music className="w-8 h-8" /> },
  { name: "Art", icon: <Palette className="w-8 h-8" /> },
  { name: "Sports", icon: <Trophy className="w-8 h-8" /> },
  { name: "Hobby", icon: <Gamepad className="w-8 h-8" /> },
  { name: "Comedy", icon: <Smile className="w-8 h-8" /> },
  { name: "Culinary", icon: <Utensils className="w-8 h-8" /> },
  { name: "Music", icon: <Music className="w-8 h-8" /> },
  { name: "Art", icon: <Palette className="w-8 h-8" /> },
  { name: "Sports", icon: <Trophy className="w-8 h-8" /> },
  { name: "Hobby", icon: <Gamepad className="w-8 h-8" /> },
  { name: "Comedy", icon: <Smile className="w-8 h-8" /> },
  { name: "Culinary", icon: <Utensils className="w-8 h-8" /> },
];

const CategoryPills: React.FC = () => {
  return (
    <Carousel itemsToShow={27}>
      {categories.map((category, index) => (
        <a href=""
          key={index}
          className="flex flex-col items-center gap-2"
        >
          <div className="p-1 w-16 h-16 rounded-full bg-gray-100 bg-opacity-10 flex flex-col items-center justify-center hover:bg-opacity-20 transition-colors">
            {category.icon}
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        </a>
      ))}
    </Carousel>
  );
};

export default CategoryPills;