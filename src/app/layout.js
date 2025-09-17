import { Jost, Roboto } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Edura - Online Courses & Education Platform",
  description: "Learn new skills online with expert instructors. Discover thousands of courses and advance your career with Edura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
