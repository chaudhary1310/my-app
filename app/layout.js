import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecondaryNavbar from "../components/SecondaryNavbar";
export const metadata = {
  title: "My Company",
  description: "Official Company Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <SecondaryNavbar /> {/* ✅ new secondary navbar */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}