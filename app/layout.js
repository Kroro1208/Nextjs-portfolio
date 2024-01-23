import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import SideMenu from "@/components/SideMenu";

const noto_sans = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Modern Website with Next.js",
  description: "created by Naoya Yamagata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={noto_sans.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full min-h-screen overflow-hidden" >
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
