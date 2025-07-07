import React from "react";
import Image from "next/image";

const HeroBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/images/hero.jpeg"}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center min-h-[400px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4 animate-fadeIn">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-center text-white max-w-2xl animate-slideUp">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
