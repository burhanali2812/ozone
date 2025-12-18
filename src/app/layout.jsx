import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SidebarLayout from "../components/SidebarLayout";

export const metadata = {
  title: "Ozone Mineral Water - Sip the Good Life",
  description:
    "Premium mineral water available in 500ml and 1500ml bottles. Experience pure hydration with Ozone Mineral Water.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
