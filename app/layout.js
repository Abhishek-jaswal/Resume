import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Abhishek Jaswal | Full Stack Developer",
    template: "%s | Abhishek Jaswal",
  },

  description:
    "Abhishek Jaswal is a Full Stack Developer with 3+ years of experience in Next.js, React, Tailwind CSS, Node.js, and backend systems. Building scalable, high-performance web applications.",

  keywords: [
    "Abhishek Jaswal",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Tailwind CSS",
    "Node.js",
    "PocketBase",
    "CRM Developer",
    "Web Developer Portfolio",
    "Software Engineer India",
  ],

  authors: [{ name: "Abhishek Jaswal" }],
  creator: "Abhishek Jaswal",

  metadataBase: new URL("https://abhishek-jaswal.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Abhishek Jaswal | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Tailwind CSS, and scalable backend systems.",
    url: "https://abhishek-jaswal.vercel.app",
    siteName: "Abhishek Jaswal Portfolio",
    images: [
      {
        url: "/og-image.png", // create this image (1200x630)
        width: 1200,
        height: 630,
        alt: "Abhishek Jaswal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jaswal | Full Stack Developer",
    description:
      "Full Stack Developer skilled in Next.js, React, Tailwind CSS, and backend development.",
    images: ["/og-image.png"],
    creator: "@AJaswal52534", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0d0f16] text-white">
        {children}
      </body>
    </html>
  );
}
