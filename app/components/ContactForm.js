"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setStatus(result.success ? "Message Sent!" : "Failed to send message");

    if (result.success) {
      setFormData({ email: "", name: "", subject: "", message: "" });
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-full px-6 py-20  flex flex-col items-center"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white">
          Let &apos s Work <span className="text-green-400">Together</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Have a project in mind? Let &apos s discuss how we can bring your ideas to life
        </p>
      </div>

      {/* Main container */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">

        {/* Left Section - Contact Info */}
        <div className="flex-1 text-white">
          <h3 className="text-3xl font-semibold mb-4">Get in touch</h3>
          <p className="text-gray-400 mb-8">
            I &apos m always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          {/* Email */}
          <div className="flex items-center gap-4 bg-[#111321] p-4 rounded-xl mb-4 border border-gray-800">
            <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center text-black text-xl font-bold">
              ✉️
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-semibold">your.email@example.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-[#111321] p-4 rounded-xl mb-4 border border-gray-800">
            <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center text-black text-xl font-bold">
              📞
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-semibold">+1 (123) 456-7890</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-[#111321] p-4 rounded-xl mb-4 border border-gray-800">
            <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center text-black text-xl font-bold">
              📍
            </div>
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="font-semibold">Your City, Country</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 bg-[#111321] p-8 rounded-2xl border border-gray-800 shadow-lg">
          <form onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full">
                <label className="text-gray-300 text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-lg bg-[#0b0d14] border border-gray-700 text-white"
                />
              </div>

              <div className="w-full">
                <label className="text-gray-300 text-sm">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-lg bg-[#0b0d14] border border-gray-700 text-white"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="text-gray-300 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-lg bg-[#0b0d14] border border-gray-700 text-white"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-3 h-32 rounded-lg bg-[#0b0d14] border border-gray-700 text-white"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold p-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              ✈️ Send Message
            </button>
          </form>

          {status && (
            <p className="text-center text-green-400 mt-3">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}
