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
            ],
        },
    ]

    const {Selected, setSelected} = useSelected()

    return (
        <div id='sidebar' className='px-9 pt-6 overflow-y-scroll w-[300px] scrollbar-hide'>
            {docs.map((section, index) => 
            (
                <div key={index} className='mb-6'>
                    <h2 className='font-[600] pl-2'>{section.title}</h2>
                    <ul className='mt-2'>
                        {section.pages.map((page, index) => (
                            <Link href={`/docs/${page.title.replace(/\s/g, "").toLowerCase()}`}> <div onClick={()=> setSelected(section.title)} key={index} className={`${doc == page.title.replace(/\s/g, "").toLowerCase() ? 'bg-zinc-100 dark:bg-zinc-900' : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'} text-zinc-800 dark:text-zinc-300 py-1 rounded-[8px] px-2 w-full cursor-pointer mt-1`}>{page.title}</div> </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Sidebar