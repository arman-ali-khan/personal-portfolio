import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/Layout/Layout'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout title={'Home'}>
    <Hero />
    <About />
    <Skills />
   </Layout>
  )
}
