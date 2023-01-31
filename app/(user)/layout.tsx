import "../globals.css";
import Header from "@/components/Header";
import { Inter, Bai_Jamjuree } from "@next/font/google";

const bai = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bai.variable} ${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/*Banner*/}
      <body className="bg-white-primary max-w-screen-2xl 2xl:max-w-full m-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
