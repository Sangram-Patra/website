import type { Metadata } from "next";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "@/public/css/style.css";
import "@/public/css/responsive.css";
import "@/public/css/blog.css";
import "@/public/css/spacing.css";
import Footer from "@/components/Shared/Footer";
import Preloader from "@/components/Shared/Preloader";
import MagicCursor from "@/components/Shared/MagicCursor";
import ScrollTopUp from "@/components/Shared/ScrollTopUp";
import "@/../react-modal-video/scss/modal-video.scss";
import SmoothScroll from "@/components/Shared/SmoothScroll";
import SectionScroll from "@/components/Shared/SectionScroll";

export const metadata: Metadata = {
  title: "Sangram Patra — Software Developer (React)",
  description:
    "Portfolio of Sangram Patra, React & Next.js focused software developer based in Bengaluru, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Preloader />
          <MagicCursor />
          <SmoothScroll />
          <ScrollTopUp />
          <SectionScroll />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
