import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {

    return (
    <>
        <div className='min-h-screen flex items-center'>
            <div className='pt-10'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b from-white to-zinc-300'>Beautiful & Modern <br/> ui components for <br/> your website</h1>
                <p className='mt-4 text-sm max-w-xs md:text-md md:max-w-sm lg:text-xl'>Say bye to unnecessory Tailwind class mess, just copy and paste</p>
              
                <Link href="/docs/overview"><Button className='mt-8 px-2 py-1 text-xs lg:px-4 lg:py-[1.6em] lg:text-[0.85em] font-[600]'>Components <ChevronRight /> </Button></Link>
                <Image alt='logos' className='mt-12 max-w-xs sm:max-w-sm lg:max-w-lg' src='/logos.svg' width={500} height={500} />
            </div>
        </div>
        
    </>
    )
}

export default Hero