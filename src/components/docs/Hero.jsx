import React from 'react'
import Link from 'next/link';
import CodePreview from '../CodePreview';
import Terminal from '@/components/Terminal';

const Hero = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-3">Hero</h1>
      <p className="text-zinc-400 max-w-xl">Beautiful Hero Sections made with TailwindCSS, Framer motion, make sure to <Link href="/docs/installation" className="link">install dependencies</Link> before using them.</p>
      <h1 className='title'>Install Dependencies</h1>
      <Terminal className="mb-10" library="framer-motion lucide-react"/>

      <h1 className='title'>Spotlight Hero Section</h1>
      <CodePreview component="Hero1"/>

    </>
  )
}

export default Hero