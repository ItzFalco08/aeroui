import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Usage from '@/components/Usage'
import Pages from '@/components/Pages'

export default function Home() {
  return (
    <div className='con relative'>
      <Navbar />
      <Hero />
      <Pages />
      <Usage />
    </div>
  )
}