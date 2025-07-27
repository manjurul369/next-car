import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";

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
    <div id="admin-root">
      {children}
    </div>
  );
}