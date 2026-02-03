import "./globals.css";

export const metadata = {
  title: {
    default: "Abhishek Jaswal | Full Stack Developer",
    template: "%s | Abhishek Jaswal",
  },

  description:
    "Abhishek Jaswal is a Full Stack Developer with 3+ years of experience in Next.js, React, Tailwind CSS, Node.js, and backend systems.",

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
    "Web Developer Portfolio",
    "Software Engineer India",
    "Software Developer",
    "Open Source Contributor",
    "CRM Developer",
    "PocketBase",
    "website developer",
    "website to app",
    "Express.js Developer",
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
        url: "/og-image.png",
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
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0d0f16] text-white">
        {children}
      </body>
    </html>
  );
}
