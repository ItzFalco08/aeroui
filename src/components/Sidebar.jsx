"use client"
import { useSelected } from '@/hooks/useSelected';
import Link from 'next/link'
import { useParams } from 'next/navigation';

const Sidebar = () => {
    const { doc } = useParams();
    
    const docs = [
        // getting started -> Installation, Usage
        {
            title: "Getting Started",
            pages: [
                {
                    title: "Overview",
                },
                {
                    title: "Installation",
                },
            ],
        },

        // socials --> Hire Me, Github, Portfolio, Fiverr, LinkedIn, Telegram
        {
            title: "Developer",
            pages: [
                {
                    title: "About Me",
                },
            ],
        }, 

        // components -> Hero, Navbar
        {
            title: "Components",
            pages: [
                {
                    title: "Hero",
                },
                {
                    title: "Navbar",
                },
                {
                    title: "Button",
                },
                {
                    title: "Card",
                },
            ],
        },
    ]

    const { setSelected } = useSelected()

    return (
        <div id='sidebar' className='hidden md:block px-9 h-full !my-20 overflow-y-scroll w-[300px] scrollbar-hide'>
            {docs.map((section, index) => 
            (
                <div key={index} className='mb-6'>
                    <h2 className='font-[600] pl-2 mb-2'>{section.title}</h2>
                    <ul className=''>
                        {section.pages.map((page, index) => (
                            <Link key={index} href={`/docs/${page.title.replace(/\s/g, "").toLowerCase()}`}> <div onClick={()=> setSelected(section.title)} key={index} className={`border-l ${doc == page.title.replace(/\s/g, "").toLowerCase() ? ' border-black dark:border-white' : ' dark:border-zinc-600'} hover:dark:text-white text-zinc-800 dark:text-zinc-300 py-1 px-4 w-full cursor-pointer ml-2`}>{page.title}</div> </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Sidebar