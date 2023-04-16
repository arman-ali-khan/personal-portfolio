import { Inter } from "next/font/google";
import Layout from "@/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Qualification from "@/components/Qualification/Qualification";
import Address from "@/components/Address/Address";
import Contact from "@/components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div className="flex flex-col gap-12 md:mx-12 md:w-4/12">
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
          <Contact />
        </div>
      </div>
    </Layout>
  );
}
