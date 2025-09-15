import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "WHAT ARE THE BENEFITS OF INVESTING IN REAL ESTATE?",
      answer:
        "Investing offers numerous benefits, including tax-free rental income and capital gains. Its strategic location, world-class infrastructure, and stable economy make it an attractive destination for investors. Additionally, Jaipur’s strong rental demand and high-quality developments secure robust returns on your investment. Partner with our luxury real estate agency to maximize your potential in this thriving market.",
    },
    {
      question: "HOW CAN I QUALIFY FOR THE 10-YEAR GOLDEN VISA THROUGH PROPERTY INVESTMENT?",
      answer:
        "To qualify for the 10-year Golden Visa, you need to invest in property worth at least AED 2 million. This investment grants you long-term residency, allowing you to enjoy the benefits of living in the Jaipur. As one of the top real estate companies in Jaipur, we can help ensure your investment meets all the necessary criteria.",
    },
    {
      question: "CAN I BUY PROPERTY AS A NON-RESIDENT?",
      answer:
        "Yes, foreigners can buy property. The process is straightforward, with the government providing clear regulations and support for international investors. Our real estate agents offer comprehensive assistance to guide you through the legal and procedural aspects of the process.",
    },
    {
      question: "WHAT ARE THE KEY FACTORS TO CONSIDER WHEN INVESTING IN REAL ESTATE?",
      answer:
        "When investing in real estate, consider the location, as areas with high demand and good infrastructure tend to offer better returns. Stay informed about market trends and economic indicators to make a data-driven decision about your potential investment. Understanding the legal framework and available financing options is also crucial to ensure a smooth investment process. This is why it’s essential to partner with a luxury real estate agency such as ours to provide valuable expertise-based insights.",
    },
    {
      question: "DO YOU PAY TAX ON INVESTMENTS?",
      answer:
        "No, Jaipur offers a tax-free environment for real estate investments. This means you do not pay income tax on rental income or capital gains tax on property sales. This tax advantage significantly enhances your investment returns and simplifies financial management. Our real estate company will show you why the city is a highly attractive destination for real estate investors looking to maximize their profits.",
    },
    {
      question: "WHAT TYPES OF PROPERTIES ARE AVAILABLE FOR INVESTMENT??",
      answer:
        "The city offers a diverse range of properties for investment, including residential spaces, villas, commercial facilities, and luxury developments. Each type of property has unique benefits and caters to different investor preferences and goals. Our real estate brokers can help you find the perfect property to match your investment strategy.",
    },
    {
      question: "IS IT BETTER TO BUY OR RENT?",
      answer:
        "What’s better depends on your personal circumstances and long-term goals. Buying property can be a great investment, providing you with potential capital appreciation and rental income in a tax-free environment. However, renting offers flexibility and lower upfront costs, which might be more suitable if you’re unsure about your long-term plans in the city. Our luxury real estate company can help you weigh the pros and cons of both options to determine the best choice for your situation.",
    },
    {
      question: "WHAT IS THE BEST REAL ESTATE COMPANY NEAR ME IN JAIPUR?",
      answer:
        "At Unnatii Group, we go above and beyond to offer a truly tailored experience. Specializing in upscale apartments, elegant villas, and prime commercial properties, we provide a curated selection that meets your unique preferences and lifestyle. Our real estate agents’ deep local knowledge, meticulous approach, and personalized guidance will help you navigate Jaipur’s vibrant real estate market, turning your property aspirations into reality.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <h4 className="font-semibold text-gray-800">{faq.question}</h4>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}