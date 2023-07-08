import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Appointment-booking",
  description: "Made with love in Ghana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
