import type { Metadata } from "next";
import { Roboto, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../../main.css";
import BootstrapClient from "@/components/BootstrapClient";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--default-font",
});

const raleway = Raleway({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--heading-font",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--nav-font",
});

export const metadata: Metadata = {
  title: "Phòng khám Quang Tâm - Rối loạn giấc ngủ và Stress",
  description:
    "Phòng khám chuyên điều trị rối loạn giấc ngủ và stress. Bác sĩ CKII Nguyễn Văn Quang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${roboto.variable} ${raleway.variable} ${poppins.variable}`}
      >
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
