import React, { useState } from "react";
import {
  Building,
  GraduationCap,
  ShoppingBag,
  Plane,
  Train,
  Bus,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Home,
  Users,
  Calculator,
  MapPin,
  Navigation
} from "lucide-react";

// Correct import path
import GOVINDAM from "../../assets/GOVINDAM.png";

export default function Govindam() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [GOVINDAM, GOVINDAM, GOVINDAM, GOVINDAM];

  const keyFeatures = [
    { icon: Calculator, title: "10648 Sq Yards", desc: "Total project area" },
    { icon: Home, title: "86 Plots Available", desc: "Various sizes from 80-266 sq yards" },
    { icon: Navigation, title: "Multi-Width Roads", desc: "30, 40, 60 feet road access" },
    { icon: MapPin, title: "Prime Location", desc: "Strategic connectivity advantage" }
  ];

  const locationBenefits = [
    { icon: Plane, title: "Airport", time: "30 min", color: "bg-blue-500" },
    { icon: Train, title: "Railway Station", time: "20 min", color: "bg-green-500" },
    { icon: Bus, title: "Bus Stand", time: "25 min", color: "bg-purple-500" },
    { icon: GraduationCap, title: "Educational Hubs", time: "5-10 min", color: "bg-orange-500" },
    { icon: ShoppingBag, title: "Shopping Centers", time: "15 min", color: "bg-pink-500" }
  ];

  const investmentHighlights = [
    "Lower entry cost with high ROI potential",
    "Higher rental yields in prime location",
    "Reduced maintenance expenses",
    "Shorter vacancy periods",
    "Strong appreciation potential",
    "Ideal for young professionals"
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-16">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src={GOVINDAM}
          alt="Govindam Infotech City"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Govindam
          </h1>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold">86</div>
            <div className="text-sm opacity-80">Plots</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">10648</div>
            <div className="text-sm opacity-80">Sq Yards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">90-266</div>
            <div className="text-sm opacity-80">Plot Sizes</div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Choose Unnatii Enclave?
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

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "location", "gallery", "investment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 font-semibold capitalize whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Overview</h3>
                <p className="text-gray-600 mb-6">
                  Discover unmatched investment opportunities in our premium studio apartments, designed for modern living and maximum returns.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Financial Benefits</h4>
                  <p>Lower entry costs, reduced maintenance expenses, and higher rental yields make this an exceptional investment opportunity.</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-3">Operational Convenience</h4>
                  <p>Simplified management with prime location accessibility, perfect for young professionals and students.</p>
                </div>
              </div>

              {/* Key Specs */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                  <div className="space-y-4">
                    <SpecItem text="Land Size: 368 sq yards" />
                    <SpecItem text="30 fully furnished studios" />
                    <SpecItem text="3 office spaces" />
                  </div>
                  <div className="space-y-4">
                    <SpecItem text="Basement + Ground + 13 floors" />
                    <SpecItem text="3 duplex showrooms" />
                    <SpecItem text="RERA: RAJ/P/2024/3016" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>+91 XXX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>info@govindam.com</span>
                  </div>
                </div>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-xl mt-6 hover:bg-gray-100 transition">
                  Schedule a Call
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-4">RERA Information</h4>
                <p className="text-sm text-gray-600 mb-3">RERA NO: RAJ/P/2024/3016</p>
                <a
                  href="https://rera.rajasthan.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Visit RERA Website</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Location Tab */}
        {activeTab === "location" && (
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Prime Location Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {locationBenefits.map((benefit, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                      <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
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
                  title="Govindam Infotech City Location"
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  width="100%"
                  height="400"
                  className="rounded-xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
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
                {galleryImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className={`w-full h-24 object-cover rounded-xl cursor-pointer transition ${selectedImage === i
                      ? "ring-4 ring-blue-500 shadow-lg"
                      : "hover:shadow-md opacity-80 hover:opacity-100"
                    }`}
                    onClick={() => setSelectedImage(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Investment Tab */}
        {activeTab === "investment" && (
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Investment Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentHighlights.map((text, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{text}</span>
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

// Reusable small component
function SpecItem({ text }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle className="w-5 h-5 text-green-500" />
      <span>{text}</span>
    </div>
  );
}
