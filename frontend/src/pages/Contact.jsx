import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you! Whether you have a question about projects,
            pricing, or anything else, our team is ready to answer all your queries.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">📍 Address</h3>
              <p className="text-gray-600">
                123 Unnatii Residency, Jaipur, Rajasthan, India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">📞 Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">📧 Email</h3>
              <p className="text-gray-600">info@unnatii.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <iframe
          title="Unnatii Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.985283085768!2d75.72089661504395!3d26.84570708315824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50063309bd5%3A0x7b558cd3eb8bf992!2sUnnatii%20Real%20Estate%20Group!5e0!3m2!1sen!2sin!4v1694593282914!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
