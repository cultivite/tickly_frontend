import React from "react";

interface CollageProps {
  images: string[];
}

const Collage: React.FC<CollageProps> = ({ images }) => {
  return (
    <div className="flex-grow grid grid-cols-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-3xl ${
            index === 1
              ? "sm:col-span-2 sm:row-span-2 col-span-2 row-span-2"
              : ""
          } ${
            index === 5
              ? "sm:col-span-2 sm:row-span-2 col-span-2 row-span-2"
              : ""
          }`}
        >
          <img
            src={image}
            alt={`collage ${index}`}
            className="w-full h-full object-cover transform aspect-square"
          />
        </div>
      ))}
    </div>
  );
};

export default Collage;