import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SidebarLayout from "../components/SidebarLayout";
import Script from "next/script";

export const metadata = {
  title: "Ozone Mineral Water® Pvt Ltd - Sip the Good Life",
  description:
    "Premium mineral water available in 500ml and 1500ml bottles. Experience pure hydration with Ozone Mineral Water® Pvt Ltd.",
  icons: {
    icon: "/favicon.ico", // or '/icon.png'
    apple: "/apple-icon.png", // Optional: for Apple devices
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TDJEEQMLCY"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TDJEEQMLCY');
          `}
        </Script>
      </head>

      <body className="antialiased">
        <SidebarLayout>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
        </SidebarLayout>
      </body>
    </html>
  );
}
