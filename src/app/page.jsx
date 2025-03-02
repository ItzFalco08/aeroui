import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Usage from '@/components/Usage'
import Pages from '@/components/Pages'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='con relative'>
      <Navbar />
      <Hero />
      <Pages />
      <Usage />
      <Footer />
    </div>
  )
}