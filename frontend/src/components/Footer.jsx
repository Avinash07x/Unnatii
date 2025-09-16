import React, { useState } from "react";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Whatsapp from "../assets/whatsapp-brands-solid-full.svg";
import unnatti from "../assets/unnatti.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook", type: "icon" },
    { icon: Instagram, href: "#instagram", label: "Instagram", type: "icon" },
    { icon: Whatsapp, href: "#whatsapp", label: "WhatsApp", type: "image" },
  ];

  return (
    <footer className="bg-gray-50 border-t relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <img src={unnatti} alt="Unnatti" className="h-10 w-auto" />
              </div>
              <p className="text-gray-600">
                Unnatii Group is a globally connected real-estate company based in Jaipur. Home to a team of diverse, highly qualified and experienced realtors and marketers, it offers a range of premium services across all types of township.
              </p>
            </div>

          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <div className="text-gray-700">
                    <div className="font-medium">K.No.59, Golywas,</div>
                    <div>Near Mahima Elanza,</div>
                    <div>Vandematram Circle, Mansarovar, Jaipur</div>
                    <div>302020</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                  <div className="text-gray-700">
                    <div className="font-medium mb-1">Call Us:</div>
                    <div>+91-141-4050650</div>
                    <div>+91-141-4050607</div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (social.label === "WhatsApp") {
                        setShowWhatsapp(!showWhatsapp);
                      } else {
                        window.open(social.href, "_blank");
                      }
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      social.label === "WhatsApp"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white"
                    }`}
                    aria-label={social.label}
                  >
                    {social.type === "icon" ? (
                      <social.icon size={20} />
                    ) : (
                      <img src={social.icon} alt={social.label} className="w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Side Chat Box */}
      {showWhatsapp && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border shadow-lg rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-green-600">Chat on WhatsApp</h4>
            <button
              onClick={() => setShowWhatsapp(false)}
              className="text-gray-500 hover:text-red-500"
            >
              ✖
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Hi 👋, how can we help you today?
          </p>
          <a
            href="https://wa.me/919887716393"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* Bottom Footer */}
      <div className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left text-sm text-gray-600">
              © Copyright 2025 UNNATII Real Estate Pvt. Ltd. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
