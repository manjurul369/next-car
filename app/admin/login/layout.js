import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

export const metadata = {
  title: "Admin Panel",
  description: "Admin dashboard for car rental management",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${jakarta.className} ${jakarta.variable}`}>
        <div id="admin-root">
          {children}
        </div>
      </body>
    </html>
  );
}