"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

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
    <section id="contact" className="section-padding relative max-w-5xl mx-auto py-24 px-4">
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/5 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />


      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Let&apos;s Work <span className="text-green-400">Together</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
            <p className="text-gray-400 mb-4">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>

            <div className="space-y-2 ">
              {/* Email */}
              <div className="flex items-center gap-4 glass-card p-4">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">abhignitejaswal@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 glass-card p-4">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+91 8894727339</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 glass-card p-4">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Dharamshala, India</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Abhishek-jaswal"
                target="_blank"
                className="p-3 glass-card hover:text-green-400 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-jaswall/"
                target="_blank"
                className="p-3 glass-card hover:text-green-400 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 lg:p-8 space-y-2"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-[#0b0d14] border border-green-500/40  "
                  />
                </div>

                <div>
                  <label className="text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 rounded-lg bg-[#0b0d14] border border-green-500/40 "
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 rounded-lg bg-[#0b0d14] border border-green-500/40 "
                />
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full mt-1 p-3 rounded-lg bg-[#0b0d14] border border-green-500/40 
                          resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold p-3 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {status && (
                <p className="text-center text-green-400">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
