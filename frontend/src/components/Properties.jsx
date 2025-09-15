import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link
import shiv from "../assets/shiv.jpg";
import ENCLAVE from "../assets/ENCLAVE.jpg";
import RESIDENCY from "../assets/RESIDENCY.png";
import GOVINDAM from "../assets/GOVINDAM.png";

const properties = [
  {
    id: 1,
    title: "UNNATII SHIV VILAS",
    location: "Mansarover Extension",
    price: "₹1.64 Cr Onwards",
    size: "2417 - 3149 Sq Ft",
    bhk: "3 & 4 BHK Flats",
    tag: "New Launch",
    image: shiv,
    ExploreMore: "/Unnatii-shiv-vilas",
  },
  {
    id: 2,
    title: "UNNATII ENCLAVE",
    location: "Tonk Road",
    price: "₹93.82 Lacs Onwards",
    size: "1705 - 2619 Sq Ft",
    bhk: "3 & 4 BHK Flats",
    tag: "Bookings Open",
    image: ENCLAVE,
    ExploreMore: "/Unnatii-enclave",
  },
  {
    id: 3,
    title: "UNNATII RESIDENCY",
    location: "Patrakar Colony",
    price: "₹78.50 Lacs Onwards",
    size: "1200 - 2000 Sq Ft",
    bhk: "2 & 3 BHK Flats",
    tag: "Ready to Move",
    image: RESIDENCY,
    ExploreMore: "/Unnatii-residency",
  },
  {
    id: 4,
    title: "GOVINDAM",
    location: "Jagatpura",
    price: "₹1.10 Cr Onwards",
    size: "2000 - 2800 Sq Ft",
    bhk: "3 BHK Flats",
    tag: "Luxury",
    image: GOVINDAM,
    ExploreMore: "/Unnatii-govindam",
  },
  {
    id: 5,
    title: "UNNATII Panache",
    location: "Ajmer Road",
    price: "₹65 Lacs Onwards",
    size: "1000 - 1800 Sq Ft",
    bhk: "2 & 3 BHK Flats",
    tag: "Hot Deal",
    image: shiv,
    ExploreMore: "/Unnatii-panache",
  },
  {
    id: 6,
    title: "UNNATII Elanza",
    location: "JLN Marg",
    price: "₹1.85 Cr Onwards",
    size: "2500 - 3500 Sq Ft",
    bhk: "3 & 4 BHK Flats",
    tag: "Premium",
    image: ENCLAVE,
    ExploreMore: "/Unnatii-elanza",
  },
];

export default function Properties() {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Properties
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Property Image */}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                {property.tag}
              </span>
            </div>

            {/* Property Details */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="flex items-center text-gray-500 mt-1">
                <MapPin size={16} className="mr-1" /> {property.location}
              </p>
              <p className="text-gray-700 mt-2">
                Price: <span className="font-semibold">{property.price}</span>
              </p>
              <p className="text-gray-700">
                Size: <span className="font-semibold">{property.size}</span>
              </p>
              <p className="text-gray-700">{property.bhk}</p>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <Link
                  to={property.ExploreMore}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-md font-medium text-center hover:bg-indigo-700 transition"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
