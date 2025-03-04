import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Usage from '@/components/Usage'
import Pages from '@/components/Pages'
import Footer from '@/components/Footer'

export default function Home() {
  
  return (
    <div className="px-[1em] relative sm:px-[2em] md:px-[4em]  2xl:max-w-[70vw] 2xl:mx-auto">
      <Navbar />
      <Hero />
      <Pages />
      <Usage />
      <Footer /> 
    </div>
  )
}