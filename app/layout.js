import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DuckLink",
  description: "Organize your links and make them easily accessible.",
  keywords: [
    "ducklink",
    "links",
    "management",
    "profile",
    "social",
    "single",
    "solution",
    "personalized",
    "organization",
    "sharing",
    "banduck",
    "alternative",
    "content",
    "hub",
    "bio",
    "multi-link",
    "access",
  ],
  authors: [{ name: "eminboydak" }, { name: "nurbanuacar" }],
  openGraph: {
    title: "DuckLink",
    description: "Organize your links and make them easily accessible.",
    siteName: "DuckLink",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
