import React from 'react';
import {Button} from '@/components/ui/button';
import { useTheme } from "next-themes";
import Link from 'next/link';

const About = () => {
    const {theme} = useTheme();

    const frontend = [
        { name: 'React', color: '2A668B' },
        { name: 'Next.js', color: '0C0D0F' },
        { name: 'HTML', color: 'B95838' },
        { name: 'CSS', color: '2A498B' },
        { name: 'TailwindCSS', color: '2A598B' },
        { name: 'Framer Motion', color: '8B2A46' },
        { name: 'Bootstrap', color: '7952B3' },
    ];

    const backend = [
        { name: 'Node.js', color: '47A248' },
        { name: 'Express', color: '0C0D0F' },
        { name: 'MongoDB', color: '47A248' },
        { name: 'Socket.IO', color: '0C0D0F' },
        { name: 'Auth0', color: 'EB5424' },
        { name: 'PassportJS', color: '47A248' },
    ];

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-3">About</h1>
            <p className="text-zinc-400 max-w-xl">About the creator of AeroUI</p>

            <h1 className='title'>About Developer</h1>
            <p className='para'>Hi, I am Rupam Das. A fullstack Web Developer and UI/UX designer having 3 years of experience in web development, MERN stack MongoDB, Express, ReactJS, NodeJS.</p>
         
            <h1 className='!mt-[3em] title'>Contact Me</h1>
            <div className='flex flex-wrap gap-5'>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.fiverr.com/s/rE2e4L0">
                <Button variant="secondary">
                    <svg fill={theme=="light" ? '#000' : '#fff' } width="800px" height="800px" viewBox="-2.5 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-fiverr"><path d='M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z'/><circle cx='14.375' cy='1.875' r='1.875'/></svg>
                    Fiverr
                </Button>
                </Link>

                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/ItzFalco07">
                <Button variant="secondary">
                    <svg fill={theme=="light" ? '#000' : '#fff' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                    Github
                </Button>
                </Link>

                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rupamdas07/">
                <Button variant="secondary">
                    <svg fill={theme=="light" ? '#000' : '#fff' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                    LinkedIn
                </Button>
                </Link>

                <Link target="_blank" rel="noopener noreferrer" href="https://t.me/UchihaFalco">
                <Button variant="secondary">
                    <svg className='h-6' fill={theme=="light" ? '#000' : '#fff' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
                    Telegram
                </Button>
                </Link>
            </div>

            <h1 className='!mt-[3em] !mb-0 title'>Skills</h1>

            <div className='flex flex-col gap-10 mb-24'>
                <div>
                    {/* Frontend Section */}
                    <h2 className="text-xl font-semibold mt-5">Frontend</h2>
                    <div className="w-full flex flex-wrap gap-3 mt-2 max-w-3xl">
                        {frontend.map((tech) => (
                            <img
                                key={tech.name}
                                className="h-7"
                                src={`https://img.shields.io/badge/${encodeURIComponent(
                                    tech.name
                                )}-${tech.color}?style=for-the-badge&logo=${encodeURIComponent(
                                    tech.name.replace(/\s+/g, '')
                                )}&logoColor=white`}
                                alt={`${tech.name} Badge`}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    {/* Backend Section */}
                    <h2 className="text-xl font-semibold mt-5">Backend</h2>
                    <div className="w-full flex flex-wrap gap-3 mt-2 max-w-3xl" >
                        {backend.map((tech) => (
                            <img
                                key={tech.name}
                                className="h-7"
                                src={`https://img.shields.io/badge/${encodeURIComponent(
                                    tech.name
                                )}-${tech.color}?style=for-the-badge&logo=${encodeURIComponent(
                                    tech.name.replace(/\s+/g, '')
                                )}&logoColor=white`}
                                alt={`${tech.name} Badge`}
                            />
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;
