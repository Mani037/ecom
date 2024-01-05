import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";
import LeftSideBar from "@/components/layout/LeftSideBar";
import MainContainer from "@/components/layout/MainContainer";
import TopBar from "@/components/layout/TopBar";
import RightSideBar from "@/components/layout/RightSideBar";
import ButtonBar from "@components/layout/ButtonBar";

export const metadata = {
  title: "Vibe Zone",
  description: "Next 14 social app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex flex-row ">
            <LeftSideBar />
            <MainContainer>{children}</MainContainer>
            <RightSideBar />
          </main>
          <ButtonBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
