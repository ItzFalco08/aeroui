"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import { ChevronRight, AlignLeft, X } from 'lucide-react'

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function disableScroll() {
    window.scrollTo({ top: 0 });
    document.body.style.overflow = "hidden"
  }

  function enableScroll() {
    document.body.style.overflow = ""
  }

  function handleToggle() {
    if (isOpen) {
      enableScroll();  // Re-enable scroll when closing
    } else {
      disableScroll(); // Disable scroll when opening
    }
    setIsOpen(!isOpen);
  }

  return (
    <>
      <AnimatePresence>
        {
          isOpen ? (
            <>

              <motion.div
                initial={{backdropFilter: "blur(0px)"}}
                animate={{backdropFilter: "blur(3px)"}}
                exit={{backdropFilter: "blur(0px)"}}
                className='absolute left-0 top-0 w-full h-screen'
              >

              </motion.div>

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3, ease: "linear" }}
                className='absolute left-0 top-0 h-screen w-[16rem] bg-[#f1f1f1] dark:bg-[#0a0a0a] flex items-center justify-center'
              >
                <div className='text-lg flex flex-col gap-4 '>
                  <Link href='/docs/button'>Components</Link>
                  <Link href=''>Usage</Link>
                  <Link href=''>Testimonials</Link>
                  <Link href='https://www.linkedin.com/in/rupamdas07/'>Hire Me</Link>
                </div>
              </motion.div>


            </>
          ) : ""
        }

      </AnimatePresence>


      <div id='navbar' className='absolute sm:fixed flex-shrink max-w-[46rem] h-[50px] sm:h-[54px] p-1 sm:p-[6px] flex justify-between items-center  bg-white dark:bg-[#09090a] border-[2.2px] left-1/2 translate-x-[-50%] mt-5 border-zinc-500 dark:border-zinc-900 mx-auto rounded-full'>
        <div className='pl-4 hidden md:flex gap-5 text-sm font-medium'>
          <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Home</Link>
          <Link href="/docs/overview" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Components</Link>
          <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Socials</Link>
          <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>About Me</Link>
          <Link href="/" className='text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-zinc-100'>Hire Me</Link>
        </div>

        <div onClick={handleToggle} className="md:hidden px-1 py-1 rounded-sm ml-4 hover:bg-secondary">
          {
            isOpen ? <X /> : <AlignLeft />
          }

        </div>

        <div className='flex items-center relative h-full'>
          <ModeToggle className="" />
          <Link href="/docs/overview" className='h-full'><Button className="text-xm sm:text-md rounded-full !h-[100%] text-white dark:text-black">Components <ChevronRight /></Button></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar