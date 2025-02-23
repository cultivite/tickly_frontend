import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  time: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, time }) => {
  return (
    <a href='' className="flex-shrink-0 rounded-lg shadow-md overflow-hidden mx-2 w-60">
      <img
        src={image}
        alt={title}
        className="w-60 h-80 object-cover rounded-xl"
      />
      <div className="p-4">
        <div className="text-lg font-semibold text-wrap">{title}</div>
        <div className="text-sm mt-1">{time}</div>
      </div>
    </a>
  );
};

export default ProductCard;