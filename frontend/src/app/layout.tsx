import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/custom/header';
import Footer from '@/components/custom/footer';
import { getGlobalData, getGlobalMetaData } from "@/data/loaders";
import '@/styles/global.scss';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const globalMetadata = await getGlobalMetaData();

  return {
    title: globalMetadata.data.defaultSeo.metaTitle,
    description: globalMetadata.data.defaultSeo.metaDescription,
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const globalData = await getGlobalData();


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header data={globalData.data.header} />
        {children}
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}
