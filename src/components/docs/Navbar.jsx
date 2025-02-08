import React from 'react'
import Link from 'next/link';
import CodePreview from '../CodePreview';
import Terminal from '@/components/Terminal'

const Navbar = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-3">Navbar</h1>
      <p className="text-zinc-400 max-w-xl">Beautiful Navbars made with TailwindCSS, Framer motion, make sure to <Link href="/docs/installation" className="link">install dependencies</Link> before using them.</p>

      <h1 className='title'>Install Dependencies</h1>
      <Terminal className="mb-10" library="lucide-react"/>

      <h1 className='title'>Round Fixed Navbar</h1>
      <p className='para'>Modern Fixed Rounded Navbar with Shadcn for theme switch</p>
      <CodePreview component="Navbar1" />
    </>
  )
}

export default Navbar