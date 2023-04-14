import { Inter } from "next/font/google";
import Layout from "@/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Qualification from "@/components/Qualification/Qualification";
import Portfolio from "@/components/Portfolio/Portfolio";
import Address from "@/components/Address/Address";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div className="flex flex-col gap-12 mx-12 w-4/12">
        <div>
          <Hero />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Qualification />
        </div>
        <div>
          <Address />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
    </Layout>
  );
}
