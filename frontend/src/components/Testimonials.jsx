import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "MUKESH",
      quote:
        "Unnatii is the best in the business when it comes to real estate services. Their team has a wealth of knowledge and experience in the industry, and they truly care about their clients. I highly recommend Unnatii to anyone looking for a trustworthy and reliable real estate agency.",
      avatar: "M",
    },
    {
      id: 2,
      name: "HARIRAM",
      quote:
        "Unnatii is the only real estate agency I trust to handle all my real estate needs. Their team is always available, responsive, and dedicated to providing unique customer service. I recommend them to anyone looking for a reliable and professional real estate agency.",
      avatar: "H",
    },
    {
      id: 3,
      name: "ANKIT",
      quote:
        "Unnatii helped me sell my property within a short period of time and at the right price. Their team was always available to answer my questions and kept me informed throughout the entire process. I would recommend Unnatii to anyone looking for a real estate agency that truly cares about their clients.",
      avatar: "A",
    },
    {
      id: 4,
      name: "SANDEEP",
      quote:
        "I highly recommend Unnatii for their remarkable customer service and attention to detail. They helped me find my dream home within my budget. Their team listened to my needs and worked forever to find the perfect property for me. I highly recommend Unnatii for their knowledge, expertise, and outstanding customer service.",
      avatar: "S",
    },
    {
      id: 5,
      name: "RAHUL",
      quote:
        "Thanks to Unnatii, I found my dream home in no time. The team guided me at every step and ensured I got the best deal possible. Their professionalism and dedication are truly unmatched.",
      avatar: "R",
    },
    {
      id: 6,
      name: "PRIYA",
      quote:
        "I had a wonderful experience with Unnatii. From property search to final paperwork, everything was smooth and transparent. I highly recommend their services to anyone looking for reliable real estate solutions.",
      avatar: "P",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden py-5 px-4">
      {/* Background Animation */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-200/30 to-transparent rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full animate-spin"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        />
      </div> */}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What our clients say about us</h1>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="w-full flex-shrink-0 bg-white p-12 text-center"
                >
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 border-4 border-blue-100 shadow-lg flex items-center justify-center mx-auto">
                        <span className="text-white font-bold text-xl">{t.avatar}</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 tracking-wide">{t.name}</h3>
                  </div>

                  <div className="relative max-w-2xl mx-auto">
                    <div className="absolute -top-4 -left-4 text-blue-200 text-6xl font-serif">"</div>
                    <p className="text-gray-600 leading-relaxed text-lg italic px-8 shadow-sm">{t.quote}</p>
                    <div className="absolute -bottom-8 -right-4 text-blue-200 text-6xl font-serif rotate-180">"</div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
