import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/content";
import { canIndex, siteOrigin } from "@/lib/site";
import "./globals.css";

const dmSans = localFont({
  src: "../public/fonts/dm-sans-variable.ttf",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});
const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/instrument-serif-regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/instrument-serif-italic.ttf",
      style: "italic",
      weight: "400",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin ?? "http://localhost:3000"),
  ...(siteOrigin ? { alternates: { canonical: siteOrigin } } : {}),
  title: {
    default: `${profile.name} | MBChB Student | Moi University`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Brian Kiptoo is an MBChB student approaching graduation at Moi University, exploring clinical reasoning, community health and patient communication.",
  robots: { index: canIndex, follow: canIndex },
  openGraph: {
    title: `${profile.name} — Medicine, with the person in view.`,
    description: profile.positioning,
    type: "website",
    locale: "en_KE",
    siteName: `${profile.name} · Professional portfolio`,
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#F6F3EC",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body id="top">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader name={profile.name} />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
