import { Inter } from "next/font/google";
import Layout from "@/Layout/Layout";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Qualification from "@/components/Qualification/Qualification";
import Address from "@/components/Address/Address";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import Blogs from "@/components/Blogs/Blogs";
import Testimonial from "@/components/Testimonials/Testimonial";
import FAQ from "@/components/FAQ/FAQ";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home"}>
    <main className="sm:flex w-full">
    <section className="flex flex-col gap-12 md:mx-5 md:w-4/12">
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
        <div>
          <FAQ />
        </div>
      </section>
      <section className="flex flex-col gap-12 mx-1 sm:mx-3 md:mx-5 md:w-8/12">
        <div>
          <Projects />
        </div>
        <div>
          <Blogs />
        </div>
        <div>
          <Testimonial />
        </div>
      </section>
    </main>
    </Layout>
  );
}
