import React from "react";
import R from "../assets/R.png";
import vijayji from "../assets/vijayji.png";
import shiv from "../assets/shiv.jpg";
import ENCLAVE from "../assets/ENCLAVE.jpg";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ";

export default function AboutUs() {
  const team = [
    {
      name: "Rakesh Sharma",
      role: "Director",
      img: R,
      bio: "Rakesh Sharma, Director, holds a B.A and has overall 7 years of experience in real estate. Dedicated to fostering strong relationships and offering unmatched insights, his innovative approach ensures exceptional service delivery.",
    },
    {
      name: "Vijay Kumar Saini",
      role: "Director",
      img: vijayji,
      bio: "Vijay Kumar Saini, Director, holds a B.Com and M.Com with overall 12 years of experience in real estate business. He is committed to delivering outstanding results and driving sustainable growth through innovative strategic initiatives.",
    },
  ];

  return (
    <div>
    <section className="bg-white text-black py-16 px-6 lg:px-20 mt-12">
      {/* About Us */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Us
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={ENCLAVE}
          alt="Township Layout"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <p className="text-gray-700 leading-relaxed">
            Renowned for consistently delivering top-notch, personalized real
            estate services,{" "}
            <span className="text-pink-500 font-semibold">Unnatii Group</span>{" "}
            is a leading provider of luxury townships in Jaipur and the region.
            Our diligent and experienced team possesses a nuanced understanding
            of the local market and connects clients with their ideal township.
            We provide a wide array of services, including buying and selling,
            all tailored to meet your requirements.
          </p>
          {/* <img
            src={shiv}
            alt="Unnatii Residency"
            className="rounded-2xl shadow-lg mt-8"
          /> */}
        </div>
      </div>

      {/* Mission */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-pink-500">
            Our Mission
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide personalized, transparent, and ethical
            real estate services. We aim to connect clients with their dream
            projects while building long-term relationships based on trust and
            integrity. Through our market expertise and dedication, our vision
            is to set new standards in the Jaipur real estate and property
            management industry. We’re committed to continuous improvement and
            innovation, ensuring every transaction is smooth, rewarding, and
            tailored to meet the unique needs of each client.
          </p>
        </div>
        <img
          src={shiv}
          alt="Unnatii Township"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Vision */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-pink-500">
          Our Vision
        </h3>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Join us in shaping the future of real estate and discover the
          difference a truly client-focused approach can make. Finding the
          perfect property doesn’t have to be stressful or complicated. With our
          dedicated team by your side, the entire process becomes seamless and
          enjoyable. From the initial consultation to the final handshake, we
          prioritize your preferences, granting you access to the best
          opportunities in Jaipur’s vibrant market.
        </p>
      </div>

      {/* Dream Team */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-4 text-pink-500">
          Dream Team
        </h3>
        <p className="text-gray-700 mb-10 max-w-4xl leading-relaxed">
          Unnatii Group consists of RERA-certified professionals with an
          inherent passion for real estate. With strong ties to the community
          and in-depth understanding of the local market, we offer unparalleled
          insights and expertise. Each member of our team is an expert in their
          field, ensuring that our clients receive comprehensive advice and
          guidance.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-lg mx-auto mb-4 shadow-md h-72 w-full object-cover"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-pink-500">{member.role}</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
          <Testimonials />
      <FAQ />
  </div> 
  );
}
