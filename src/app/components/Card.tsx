// components/Card.tsx
import React from 'react';

// Define the types for the Card component props
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover sm:h-56 md:h-64"
      />
      
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{description}</p>

        {/* Link */}
        <a
          href={link}
          className="inline-block text-indigo-600 font-semibold hover:text-indigo-800 mt-auto"
        >
          Read more
        </a>
      </div>
      
    </div>
  );
};

export default Card;
