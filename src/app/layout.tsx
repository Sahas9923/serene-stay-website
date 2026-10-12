import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "600"],
  variable: "--font-noto-sinhala",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serene Stay | Apartment in Boralesgamuwa, near Colombo",
  description:
    "A peaceful, fully furnished one-bedroom apartment in Rattanapitiya, Boralesgamuwa. King bed, kitchen, balcony, AC, free WiFi and free parking, close to Colombo.",
  openGraph: {
    title: "Serene Stay | Boralesgamuwa",
    description: "A peaceful home away from home, close to Colombo.",
    images: ["/images/1.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${sinhala.variable}`}>{children}</body>
    </html>
  );
}