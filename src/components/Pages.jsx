import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

export default function Pages() {
    const pages = [
        {
            title: "Hero Sections",
            components: 3,
            image: ""
        },

        {
            title: "Navbars",
            components: 3,
            image: ""
        },

        {
            title: "Cards",
            components: 6,
            image: ""
        },

        {
            title: "Buttons",
            components: 12,
            image: ""
        }
    ]

    return (
        <div className="w-full h-fit  ">
            <div>
                <p className="text-sm sm:text-[0.94em] lg:text-[1.1em] text-foreground/70">Components</p>
                <h1 className="text-xl sm:text-2xl md:text-3xl  lg:text-4xl max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl font-semibold text-foreground ">Beautiful Ui Components made by focusing in quality over quantity</h1>
                <p className="text-sm sm:text-[0.94em] lg:text-[1.1em] max-w-xs md:max-w-sm lg:max-w-md text-foreground/70 mt-4">50+ Beautifully crafted components to kickstart your next project.</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 gap-4 h-fit">

                {pages.map((page, index) => (
                    <div key={index} className="w-full h-fit ">
                        <div className="w-full max-w-sm h-[12em] rounded-xl bg-[#080808]">
                            <Image src={page.image} alt='image' height="full" width="full" className='w-full h-full ' />
                        </div>
                        <h1 className="text-xl font-medium mt-4">{page.title}</h1>
                        <p className="text-sm text-foreground/70">{page.components} components</p>
                    </div>
                ))
                }
            </div>

            <div className='w-full realtive  flex items-center'>
                <Button className="relative mx-auto my-14 rounded-lg font-semibold px-5 py-[1.4em]">Show More <ChevronRight strokeWidth={3} /></Button>
            </div>
        </div>
    )
}