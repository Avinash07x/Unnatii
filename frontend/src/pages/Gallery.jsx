import React, { useState } from "react";
import shiv from "../assets/shiv.jpg";
import ENCLAVE from "../assets/ENCLAVE.jpg";
import RESIDENCY from "../assets/RESIDENCY.png";
import GOVINDAM from "../assets/GOVINDAM.png";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [shiv, ENCLAVE, GOVINDAM,RESIDENCY]; // Add more images as needed

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Gallery</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Large Main Image */}
        <div className="lg:col-span-2">
          <img
            src={galleryImages[selectedImage]}
            alt={`Gallery ${selectedImage + 1}`}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="space-y-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-24 object-cover rounded-xl cursor-pointer transition-all duration-300 ${
                selectedImage === index
                  ? "ring-4 ring-teal-500 shadow-lg"
                  : "hover:shadow-md opacity-80 hover:opacity-100"
              }`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
