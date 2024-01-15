import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { Providers } from "./provider";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Qin-Cheng Zheng @ LAMDA, NJU-AI",
  description:
    "Qin-Cheng Zheng is a Ph.D. student at LAMDA Group, Nanjing University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={roboto.className}
    >
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
