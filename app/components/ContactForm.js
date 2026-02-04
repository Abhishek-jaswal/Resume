"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message Sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch (error) {
      setStatus("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="relative max-w-5xl mx-auto py-24 px-4"
      aria-labelledby="contact-heading"
    >
      {/* background glow */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/5 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-extrabold"
          >
            Let&apos;s Work <span className="text-green-400">Together</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas
            to life.
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
            <p className="text-gray-400 mb-6">
              I&apos;m always interested in hearing about new projects and
              opportunities.
            </p>

            <div className="space-y-3">
              <ContactItem
                icon={Mail}
                label="Email"
                value="abhignitejaswal@gmail.com"
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value="+91 8894727339"
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value="Dharamshala, India"
              />
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <SocialLink
                href="https://github.com/Abhishek-jaswal"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/abhishek-jaswall/"
                icon={Linkedin}
                label="LinkedIn"
              />
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
              className="glass-card p-6 lg:p-8 space-y-6"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <FormInput
                label="Subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <FormTextarea
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold p-3 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-center text-green-400"
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 glass-card p-4">
      <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
        <Icon className="w-6 h-6" aria-hidden />
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 glass-card hover:text-green-400 transition"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

function FormInput({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full mt-1 p-2 rounded-lg bg-[#0b0d14] border border-green-500/40"
      />
    </div>
  );
}

function FormTextarea({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <textarea
        id={id}
        rows={5}
        {...props}
        className="w-full mt-1 p-3 rounded-lg bg-[#0b0d14] border border-green-500/40 resize-none"
      />
    </div>
  );
}
