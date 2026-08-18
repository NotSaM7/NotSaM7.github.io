import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://notsam7.github.io"),
  title: "Swayam Jain — Software Engineer & Full-Stack Developer",
  description:
    "Interactive macOS desktop portfolio of Swayam Jain — Software Engineer, Full-Stack Developer & Quantitative Systems Enthusiast.",
  keywords: [
    "Swayam Jain",
    "Software Engineer",
    "Full-Stack Developer",
    "Quantitative Trading",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Swayam Jain", url: "https://github.com/NotSaM7" }],
  creator: "Swayam Jain",
  openGraph: {
    title: "Swayam Jain — Software Engineer & Full-Stack Developer",
    description:
      "Interactive macOS desktop portfolio experience of Swayam Jain.",
    type: "website",
    url: "https://notsam7.github.io/",
    siteName: "Swayam Jain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swayam Jain Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swayam Jain — Software Engineer & Full-Stack Developer",
    description:
      "Interactive macOS desktop portfolio experience of Swayam Jain.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23000000'/%3E%3Ctext x='32' y='43' font-family='Arial, sans-serif' font-size='28' font-weight='800' fill='%23F5F5F7' text-anchor='middle'%3ESJ%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black overflow-hidden">{children}</body>
    </html>
  );
}
