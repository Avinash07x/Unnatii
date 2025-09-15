import React, { useState } from "react";
import { 
  Building, GraduationCap, ShoppingBag,
  Plane, Train, Bus, Phone, Mail, ArrowRight,
  CheckCircle, Home, Users, Calculator, MapPin,
  Clock, Car, Hospital, Ruler, Navigation
} from "lucide-react";
import RESIDENCY from "../../assets/RESIDENCY.png"; // ✅ Correct relative path

export default function UnnatiiResidency() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [RESIDENCY, RESIDENCY, RESIDENCY, RESIDENCY]; // add more images if needed

  const keyFeatures = [
    { icon: Calculator, title: "19000 Sq Yards", desc: "Total project area" },
    { icon: Home, title: "8649 Sq Yards", desc: "Available plot sizes" },
    { icon: Navigation, title: "Multi-Width Roads", desc: "30, 40, 60, 200 feet road access" },
    { icon: MapPin, title: "Prime Location", desc: "Strategic connectivity advantage" }
  ];

  const locationBenefits = [
    { icon: Bus, title: "Bus Stand", time: "2 min", color: "bg-teal-500" },
    { icon: Car, title: "Ring Road", time: "3 min", color: "bg-blue-500" },
    { icon: Train, title: "Durgapura Railway Station", time: "20 min", color: "bg-purple-500" },
    { icon: Hospital, title: "Hospital", time: "5 min", color: "bg-red-500" },
    { icon: Building, title: "Bank", time: "5 min", color: "bg-orange-500" }, // Using Building icon for Bank
    { icon: Plane, title: "Sanganer International Airport", time: "20 min", color: "bg-pink-500" },
  ];

  const investmentHighlights = [
    "Lower entry cost and higher rental yields",
    "Ideal for single professionals and students",
    "Prime location with excellent connectivity",
    "Shorter vacancy periods",
    "Potential property appreciation",
    "Adaptable to emerging real estate trends"
  ];

  const plotSpecifications = [
    "Project Area: 19000 sq yards",
    "Available Plot Sizes: 8649 sq yards",
    "Commercial Area: 75348 sq yards",
    "Road Widths: 30, 40, 60, 200 feet",
    "RERA Approved: RAJ/P/2024/3185",
    "Ready for Development"
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-16">

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-blue-900 to-gray-900" />
        <div className="absolute inset-0 bg-black/30" />
        <img
          src={RESIDENCY}
          alt="Unnatii Residency"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
            Unnatii Residency
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Smart Studio Apartment Investment Opportunity
          </p>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold">8649</div>
            <div className="text-sm opacity-80">Sq Yards Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">19000</div>
            <div className="text-sm opacity-80">Project Area</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">30-200</div>
            <div className="text-sm opacity-80">Road Widths</div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Choose Unnatii Residency?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "location", "gallery", "investment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 font-semibold capitalize whitespace-nowrap transition-colors duration-300 border-b-2 ${
                  activeTab === tab
                    ? "text-teal-600 border-teal-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Overview</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium text-teal-700">Welcome to Unnatii Residency</p>
                  <p>Discover the unmatched advantages of investing in studio apartments with us.</p>

                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Financial Benefits</h4>
                    <p>Lower entry cost, higher rental yields, and reduced maintenance expenses make this a profitable investment option.</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Operational Convenience</h4>
                    <p>Ideal for single professionals and students. Prime location and excellent accessibility enhance desirability.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Additional Perks</h4>
                    <p>Shorter vacancy periods, potential property appreciation, and adaptability to emerging real estate trends.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plotSpecifications.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & RERA */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-600 to-blue-700 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>info@unnatiiresidency.com</span>
                  </div>
                </div>
                <button className="w-full bg-white text-teal-600 font-semibold py-3 rounded-xl mt-6 hover:bg-gray-100 transition-colors">
                  Schedule a Visit
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-4">RERA Information</h4>
                <p className="text-sm text-gray-600 mb-3">RERA NO: RAJ/P/2024/3185</p>
                <a
                  href="https://rera.rajasthan.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Visit RERA Website</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Location */}
        {activeTab === "location" && (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Location Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {locationBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`${benefit.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                    <p className="text-2xl font-bold text-gray-600">{benefit.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Property Location</h4>
              <iframe
                title="Unnatii Residency Location"
                src="https://www.google.com/maps"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
        )}

        {/* Gallery */}
        {activeTab === "gallery" && (
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Gallery</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <img
                  src={galleryImages[selectedImage]}
                  alt={`Gallery ${selectedImage + 1}`}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
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
        )}

        {/* Investment */}
        {activeTab === "investment" && (
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Investment Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentHighlights.map((highlight, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
