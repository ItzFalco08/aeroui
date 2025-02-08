import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import { ChevronRight } from 'lucide-react'

const Navbar = () => {
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

export default Navbar