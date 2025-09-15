import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import shiv from "../assets/shiv.jpg";
import ENCLAVE from "../assets/ENCLAVE.jpg";
import RESIDENCY from "../assets/RESIDENCY.png";
import GOVINDAM from "../assets/GOVINDAM.png";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample real estate images - replace with your actual images
  const slides = [
    {
      id: 1,
      image: shiv,
      title: 'UNNATII SHIV VILAS',
      subtitle: 'Experience Premium Living',
      description: 'Discover our exclusive range of luxury villas with world-class amenities and modern architecture.',
    },
    {
      id: 2,
      image: ENCLAVE,
      title: 'UNNATII ENCLAVE	',
      subtitle: 'Contemporary Urban Living',
      description: 'State-of-the-art apartments designed for modern families with premium finishes and smart home features.',
    },
    {
      id: 3,
      image: RESIDENCY,
      title: 'UNNATII RESIDENCY',
      subtitle: 'Build Your Dream Home',
      description: 'Prime residential plots in prestigious locations, ready for construction with all modern amenities.',
    },
    {
      id: 4,
      image: GOVINDAM,
      title: 'GOVINDAM',
      subtitle: 'Strategic Business Locations',
      description: 'Premium commercial properties in prime business districts with excellent connectivity and infrastructure.',
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mt-16">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="transform transition-all duration-700 ease-out">
            <h2 className="text-sm md:text-base font-medium text-blue-300 mb-2 uppercase tracking-wider">
              {slides[currentSlide].subtitle}
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}