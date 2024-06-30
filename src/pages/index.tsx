import Image from "next/image";
import { Inter } from "next/font/google";
import Stories from "@/components/Stories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black p-4 box-border h-screen">
      <Stories />
    </main>
  );
}
