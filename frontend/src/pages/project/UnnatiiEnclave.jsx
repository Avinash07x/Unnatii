import React, { useState } from "react";
import { 
  Building, GraduationCap, ShoppingBag,
  Plane, Train, Bus, Phone, Mail, ArrowRight,
  CheckCircle, Home, Users, Calculator, MapPin,
  Clock, Car, Hospital, Ruler, Navigation
} from "lucide-react";
import ENCLAVE from "../../assets/ENCLAVE.jpg";

export default function UnnatiiEnclave() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [ENCLAVE, ENCLAVE, ENCLAVE, ENCLAVE];

  const keyFeatures = [
    { icon: Calculator, title: "12648 Sq Yards", desc: "Total project area" },
    { icon: Home, title: "96 Plots Available", desc: "Various sizes from 80-266 sq yards" },
    { icon: Navigation, title: "Multi-Width Roads", desc: "30, 40, 60 feet road access" },
    { icon: MapPin, title: "Prime Location", desc: "Strategic connectivity advantage" }
  ];

  const locationBenefits = [
    { icon: Bus, title: "Bus Stand", time: "3 min", color: "bg-teal-500" },
    { icon: Car, title: "Ring Road", time: "2 min", color: "bg-blue-500" },
    { icon: Plane, title: "Jaipur Airport", time: "20 min", color: "bg-purple-500" },
    { icon: Hospital, title: "Hospital", time: "5 min", color: "bg-red-500" },
    { icon: GraduationCap, title: "College", time: "1 min", color: "bg-orange-500" },
    { icon: ShoppingBag, title: "Mall & Market", time: "10 min", color: "bg-pink-500" }
  ];

  const investmentHighlights = [
    "Lower entry cost with high ROI potential",
    "Strategic location with excellent connectivity",
    "Multiple plot size options (80-266 sq yards)",
    "Wide road access (30-60 feet)",
    "Proximity to educational institutions",
    "Strong infrastructure development"
  ];

  const plotSpecifications = [
    "Plot Sizes: 80–266 sq yards",
    "Road Width: 30, 40, 60 feet",
    "Total Plots: 96 available",
    "Project Area: 12648 sq yards",
    "RERA Approved: RAJ/P/2022/2360",
    "Ready for development"
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-16">

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-blue-900 to-gray-900" />
        <div className="absolute inset-0 bg-black/30" />
        <img
          src={ENCLAVE}
          alt="Unnatii Enclave"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
            Unnatii Enclave
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium Plot Investment Opportunity in Prime Location
          </p>
        </div>
      </div>

      {/* Key Features Grid */}
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

      {/* Content Sections */}
      <div className="py-16">

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Overview</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium text-teal-700">Welcome to Unnatii Enclave</p>
                  <p>Discover unmatched investment opportunities in premium plots, designed for strategic development and maximum returns.</p>

                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Financial Benefits</h4>
                    <p>Lower entry costs, increased affordability for investors, and reduced maintenance expenses make this an exceptional investment opportunity.</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Operational Convenience</h4>
                    <p>Simplified management with prime location accessibility, perfect for residential and commercial development projects.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Additional Perks</h4>
                    <p>Shorter vacancy periods, potential property appreciation, and adaptability to emerging real estate trends.</p>
                  </div>
                </div>
              </div>

              {/* Plot Specifications */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Plot Specifications</h3>
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

            {/* Contact & RERA Info */}
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
                    <span>info@unnatiienclave.com</span>
                  </div>
                </div>
                <button className="w-full bg-white text-teal-600 font-semibold py-3 rounded-xl mt-6 hover:bg-gray-100 transition-colors">
                  Schedule a Visit
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-4">RERA Information</h4>
                <p className="text-sm text-gray-600 mb-3">RERA NO: RAJ/P/2022/2360</p>
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

        {/* Location Tab */}
        {activeTab === "location" && (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Strategic Location Benefits</h3>
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
                title="Unnatii Enclave Location"
                src="https://www.google.com/maps/place/Govindam+Infotech+City/@26.746063,75.714062,86183m/data=!3m1!1e3!4m6!3m5!1s0x396dcb0c7f58d1c1:0x1af6c67969cea4fe!8m2!3d26.7460625!4d75.7140625!16s%2Fg%2F11v18qym_y?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
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

        {/* Investment Tab */}
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
