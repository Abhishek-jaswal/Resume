import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://abhishek-jaswal.vercel.app";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Abhishek Jaswal | Full Stack Developer — Next.js, React, Node.js",
    template: "%s | Abhishek Jaswal",
  },

  description:
    "Abhishek Jaswal is a Full Stack Developer from Dharamshala, India with 3+ years of experience. Seeking full-time remote Frontend or Fullstack roles. Expert in Next.js, React, Node.js, Tailwind CSS, and Supabase/PostgreSQL.",

  keywords: [
    "Abhishek Jaswal",
    "Full Stack Developer",
    "Frontend Developer Remote",
    "Fullstack Developer Remote",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "Remote Frontend Developer India",
    "Remote Fullstack Developer India",
    "Tailwind CSS Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Software Engineer India",
    "Software Developer Dharamshala",
    "Himachal Pradesh Developer",
    "Open Source Contributor",
    "Supabase Developer",
    "PostgreSQL Developer",
    "TypeScript Developer",
    "Express.js Developer",
    "UI UX Developer",
    "Freelance Web Developer India",
    "React Next.js Portfolio",
    "IT Trainer",
    "MountainKid AI",
    "urbanseru",
    "service booking platform developer",
    "abhishek jaswal portfolio",
    "hire frontend developer india",
    "hire fullstack developer remote",
  ],

  authors: [{ name: "Abhishek Jaswal", url: BASE_URL }],
  creator: "Abhishek Jaswal",
  publisher: "Abhishek Jaswal",
  generator: "Next.js",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/abhishekk.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/abhishekk.jpeg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/abhishekk.jpeg",
  },

  openGraph: {
    title: "Abhishek Jaswal | Full Stack Developer — Next.js, React, Node.js",
    description:
      "Full Stack Developer specializing in Next.js, React, Tailwind CSS, and scalable backend systems. Open to freelance & full-time opportunities.",
    url: BASE_URL,
    siteName: "Abhishek Jaswal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Jaswal — Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jaswal | Full Stack Developer",
    description:
      "Full Stack Developer skilled in Next.js, React, Tailwind CSS, Node.js, and backend development.",
    images: ["/og-image.png"],
    creator: "@abhishekjaswal",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Add your Google/Bing verification tokens here when ready
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },

  category: "technology",
};

/** JSON-LD structured data — Person + WebSite schemas */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Jaswal",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience in Next.js, React, Node.js, Tailwind CSS, and Supabase.",
  url: BASE_URL,
  image: `${BASE_URL}/abhishekk.jpeg`,
  email: "abhignitejaswal@gmail.com",
  telephone: "+91-8894727339",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dharamshala",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Abhishek-jaswal",
    "https://www.linkedin.com/in/abhishekjaswall",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "Full Stack Development",
    "UI/UX Design",
    "Open Source",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "NIIT Foundation",
    },
    {
      "@type": "EducationalOrganization",
      name: "P.G College Dharamshala",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Mountainkid.ai",
    url: "https://mountainkid.ai",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abhishek Jaswal Portfolio",
  url: BASE_URL,
  description:
    "Portfolio of Abhishek Jaswal — Full Stack Developer from Dharamshala, India.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Theme color */}
        <meta name="theme-color" content="#070a12" />
        <meta name="msapplication-TileColor" content="#070a12" />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Dharamshala, Himachal Pradesh, India" />
        <meta name="geo.position" content="32.2190;76.3234" />
        <meta name="ICBM" content="32.2190, 76.3234" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </head>
      <body className="antialiased bg-[#070a12] text-white font-dm">
        {/* Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
