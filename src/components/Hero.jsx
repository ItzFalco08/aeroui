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
                <h1 className='text-6xl font-bold w-[600px] dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b from-white to-zinc-300'>Beautiful & Modern ui components for your website</h1>
                <p className='mt-4 text-xl w-[400px]'>Say bye to unnecessory Tailwind class mess, just copy and paste</p>
                <Link href="/docs/overview"><Button className='mt-8 h-11 font-[600]'>Components <ChevronRight /></Button></Link>
                <Image alt='logos' className='mt-12' src='/logos.svg' width={500} height={500} />
            </div>
        </div>
        
    </>
    )
}

export default Hero