import Layout from "@/Layout/Layout";
import Address from "@/components/Address/Address";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Qualification from "@/components/Qualification/Qualification";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonials/Testimonial";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Home"}>
      <main className="md:flex w-full">
        <section className="flex flex-col gap-3 md:mx-2 md:w-4/12">
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
          <div className="md:block hidden">
            <Contact />
          </div>
          <div className="md:block hidden"><FAQ /></div>
        </section>
        <section className="flex flex-col gap-3 md:mx-2 md:w-8/12">
          <div>
            <Projects />
          </div>
          <div>
            <Blogs />
          </div>
          <div>
            <Testimonial />
          </div>
          <div className="md:hidden">
            <Contact />
          </div>
          <div className="md:hidden">
            <FAQ />
            </div>
        </section>
      </main>
    </Layout>
  );
}
