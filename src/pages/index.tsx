import Image from "next/image";
import { Inter } from "next/font/google";
import Stories from "@/components/Stories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Stories />
    </main>
  );
}
