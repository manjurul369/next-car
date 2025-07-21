import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/public/components/Nav";
import Footer from "@/public/components/Footer";
import { WishlistProvider } from "@/public/contexts/WishlistContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

export const metadata = {
  title: "Rent A Car",
  description: "Choose the best way of your travelling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} ${jakarta.variable}`}
      >
        <WishlistProvider>
          <Nav />
          {children}
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
