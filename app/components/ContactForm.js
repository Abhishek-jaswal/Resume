"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message Sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 px-6 overflow-hidden"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-green-500/[0.05] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-cyan-500/[0.04] blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="pill mb-5 inline-flex">✉️ Contact</span>
          <h2
            id="contact-heading"
            className="font-syne text-3xl sm:text-4xl font-bold text-white mt-3"
          >
            Let&apos;s Work <span className="text-green-400">Together</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div>
              <h3 className="font-syne text-xl font-bold text-white mb-2">Get in touch</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                I&apos;m always open to freelance work, full-time roles, and interesting collaborations.
              </p>
            </div>

            <div className="space-y-3">
              <ContactItem
                icon={Mail}
                label="Email"
                value="abhignitejaswal@gmail.com"
                href="mailto:abhignitejaswal@gmail.com"
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value="+91 88947 27339"
                href="tel:+918894727339"
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value="Dharamshala, Himachal Pradesh, India"
                href={null}
              />
            </div>

            {/* Social links */}
            <div className="mt-2">
              <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Find me on</p>
              <div className="flex gap-3">
                <SocialLink href="https://github.com/Abhishek-jaswal" icon={Github} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/abhishekjaswall/" icon={Linkedin} label="LinkedIn" />
              </div>
            </div>

            {/* Availability card */}
            <div className="mt-auto p-5 rounded-2xl bg-green-500/[0.06] border border-green-500/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-green-400 text-sm font-semibold">Available for work</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Currently open to freelance projects and full-time opportunities.
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="bg-[#0a0d18]/80 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/[0.06] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput
                  label="Full Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                />
                <FormInput
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                />
              </div>

              <FormInput
                label="Subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry / Job opportunity"
              />

              <FormTextarea
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and budget…"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Send message to Abhishek Jaswal"
                className="w-full group flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-400/30 hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-green-400/50"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                {isSubmitting ? "Sending…" : "Send Message"}
                {!isSubmitting && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                )}
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-sm font-medium ${
                    status === "Message Sent!" ? "text-green-400" : "text-gray-400"
                  }`}
                >
                  {status === "Message Sent!" ? "✓ " : ""}{status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable pieces ── */

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0a0d18]/80 border border-white/[0.06] hover:border-white/[0.1] transition-colors">
      <div className="p-2.5 rounded-xl bg-green-500/8 text-green-400 border border-green-500/15 flex-shrink-0">
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-600 mb-0.5">{label}</p>
        <p className="text-sm font-medium text-gray-200 truncate">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} aria-label={`${label}: ${value}`}>
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit Abhishek Jaswal on ${label}`}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] text-gray-400 hover:text-white text-sm transition-all duration-200"
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
      {label}
    </a>
  );
}

function FormInput({ label, id, placeholder, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider"
      >
        {label}
        {props.required && <span className="text-green-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-gray-700 text-sm focus:border-green-500/40 focus:ring-1 focus:ring-green-500/20 outline-none transition-all duration-200"
      />
    </div>
  );
}

function FormTextarea({ label, id, placeholder, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider"
      >
        {label}
        {props.required && <span className="text-green-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        rows={5}
        placeholder={placeholder}
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-gray-700 text-sm focus:border-green-500/40 focus:ring-1 focus:ring-green-500/20 outline-none resize-none transition-all duration-200"
      />
    </div>
  );
}
