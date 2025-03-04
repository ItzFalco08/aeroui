
const Hero1 = 
`"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-screen bg-black relative h-screen flex justify-center items-center overflow-hidden">
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}>
        <svg className="z-[0] absolute top-[-10em] left-[-20em] w-[50em] h-[50em] md:h-[40em] sm:left-[-10em] sm:top-[-4em] sm:w-[50em] sm:h-[50em] lg:w-[80em] lg:h-[70em] lg:top-[-16em] lg:left-[0em]" width="1050" height="681" viewBox="0 0 1030 681" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_15_3)">
          <path d="M141.217 27.4395C103.974 1.61613 119.913 -61.4635 163.68 -61.4635L199.678 -61.4635C210.368 -61.4636 220.732 -57.1419 228.808 -49.3164L663.531 371.911L910 560.5L141.217 27.4395Z" fill="#D9D9D9" fillOpacity="0.5"/>
          </g>
          <defs>
          <filter id="filter0_f_15_3" x="0.402832" y="-181.464" width="1029.6" height="861.964" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_15_3"/>
          </filter>
          </defs>
        </svg>
      </motion.div>


      <div className="z-[1] text-center flex flex-col items-center gap-4"> 
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Spotlight
        <br/>
        hero section trend.
        </h1>
        <p className="text-neutral-300 max-w-xs md:max-w-xl text-sm md:text-lg">Creating a spotlight hero section adds a striking visual element to your page. It brings immediate focus to important content or features. Designing this feels exciting, its in trend nowdays</p>
      </div>

    </div>
  );
}
`

const Hero2 = `
`

const Navbar1 = 
`import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import { ChevronRight } from 'lucide-react'

const Navbar1 = () => {
  return (
    <div className='fixed w-[46rem] h-[54px] py-[4px] flex justify-between items-center px-2 bg-white dark:bg-[#09090a] border border-[2.2px] left-1/2 translate-x-[-50%] mt-5 border-zinc-500 dark:border-zinc-900 mx-auto rounded-full'>
      <div className='pl-4 flex gap-5 text-sm font-medium'>
        <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Home</Link>
        <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Components</Link>
        <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Socials</Link>
        <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>About Me</Link>
        <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Hire Me</Link>
      </div>

      <div>
        <ModeToggle className="mr-4" />
        <Link href="/docs"><Button className="rounded-full h-[40px]">Components <ChevronRight /></Button></Link>
      </div>
    </div>
  )
}

export default Navbar1
`

const Navbar2 = `
`

const Button = 
`"use client";
import Button from '@/components/aeroui/button'

export default function Component() {
  return (
      // variant -> primary, secondary, ghost
      // size -> sm, md, lg

      <Button variant="primary" size="md" className="mt-4">Click me</Button>
  )
}
`

const ButtonPrimary = 
`"use client";
import Button from '@/components/aeroui/button'

export default function Component() {
  return (
      <Button variant="primary" size="md" className="mt-4">Primary</Button>
  )
}
`

const ButtonSecondary =
`"use client";  
import Button from '@/components/aeroui/button'

export default function Component() {
  return (
      <Button variant="secondary" size="md" className="mt-4">Secondary</Button>
  )
}
`

const ButtonGhost =
`"use client";
import Button from '@/components/aeroui/button'

export default function Component() {
  return (
      <Button variant="ghost" size="md" className="mt-4">Ghost</Button>
  )
}
`

const ButtonOutline =
`"use client";
import Button from '@/components/aeroui/button'

export default function Component() {
  return (
      <Button variant="outline" size="md" className="mt-4">Ghost</Button>
  )
}
`

const GlowCard = 
`
import GlowCard from "@/components/aeroui/glowcard"

export default function Component() {
  return (
      // color -> any valid css color (#ffffff default)
      <GlowCard color="#ffffff" className="text-white">
        <h1 className='text-xl font-medium'>Glowing Card</h1>
        <p className='text-sm mt-2 text-white/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minus excepturi illo quibusdam rem voluptates ab recusandae, beatae similique sit.</p>
      </GlowCard>
  )
}
`;

const GlowCardRed = 
`import GlowCard from "@/components/aeroui/glowcard"

export default function GlowCardRed() {
  return (
      // color -> any valid css color (#ffffff default)
      <GlowCard color="#ff1100" className="text-white">
        <h1 className='text-xl font-medium'>Glowing Card</h1>
        <p className='text-sm mt-2 text-white/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minus excepturi illo quibusdam rem voluptates ab recusandae, beatae similique sit.</p>
      </GlowCard>
  )
}

`;

const GlowCardBlue = `import GlowCard from "@/components/aeroui/glowcard"

export default function GlowCardBlue() {
  return (
      // color -> any valid css color (#ffffff default)
      <GlowCard color="#1900ff" className="text-white">
        <h1 className='text-xl font-medium'>Glowing Card</h1>
        <p className='text-sm mt-2 text-white/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minus excepturi illo quibusdam rem voluptates ab recusandae, beatae similique sit.</p>
      </GlowCard>
  )
}
`

const GlowCardYellow = `import GlowCard from "@/components/aeroui/glowcard"

export default function GlowCardYellow() {
  return (
      // color -> any valid css color (#ffffff default)
      <GlowCard color="#ffe100" className="text-white">
        <h1 className='text-xl font-medium'>Glowing Card</h1>
        <p className='text-sm mt-2 text-white/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minus excepturi illo quibusdam rem voluptates ab recusandae, beatae similique sit.</p>
      </GlowCard>
  )
}

`


export { Hero1, Hero2, Navbar1, Navbar2, Button, GlowCard, ButtonPrimary, ButtonSecondary, ButtonGhost, ButtonOutline, GlowCardRed, GlowCardBlue, GlowCardYellow };