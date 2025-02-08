import React from 'react';
import CodePreview from '../CodePreview';
import Terminal from '@/components/Terminal';
import Link from 'next/link';
import Image from 'next/image';
import {useTheme} from 'next-themes'

const Installation = () => {
    const {theme} = useTheme()
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-3">Installation</h1>
            <p className="text-zinc-400">Install libraries for the components.</p>

            {/* Lucide React Section */}
            <div className="title">Lucide React</div>
            <p className="para">lucide-react is an icon library for React. It is simple to use and offers many nice icons. Learn more at <Link target="_blank" rel="noopener noreferrer" className="link" href="https://lucide.dev/icons/">Lucide Icons</Link>.</p>
            <Terminal library={'lucide-react'} />

            {/* Framer Motion Section */}
            <div className="title mt-6">Framer Motion</div>
            <p className="para">framer-motion helps you add smooth animations to your app. It is easy to use and makes your UI more interactive. Learn more at <Link target="_blank" rel="noopener noreferrer" className="link" href="https://www.framer.com/motion/">Framer Motion</Link>.</p>
            <Terminal library={'framer-motion'} />

            {/* TailwindCSS Section */}
            <div className="title mt-6">TailwindCSS</div>
            <p className="para">TailwindCSS is a utility-first CSS framework that helps you <b> write css 10x faster. </b> Install it from <Link target="_blank" rel="noopener noreferrer" className="link" href="https://tailwindcss.com/docs/installation/using-vite">TailwindCSS Installation</Link>.</p>

            <div className='w-fit px-4 h-[50px] my-10 border rounded-xl text-[1.1em] font-semibold gap-2 flex justify-center items-center'>
                <Image className='' width={26} height={26} src="https://www.svgrepo.com/show/452228/html-5.svg" alt="Html 5 SVG Vector Icon" />
                Html

                <span className='font-normal text-zinc-600 text-2xl '> X </span>

                <Image width={26} height={26} src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" alt="Tailwindcss Icon SVG Vector Icon" />
                TailwindCSS
            </div>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lWETVfhyp9M" // Replace with your video URL
                title="YouTube video player"
                frameBorder="0"
                className='my-10'
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <div className='w-fit px-4 h-[50px] my-10 border rounded-xl text-[1.1em] font-semibold gap-2 flex justify-center items-center'>
                <Image width={26} height={26} src="https://www.svgrepo.com/show/452092/react.svg" alt="React SVG Vector Icon" />
                React

                <span className='font-normal text-zinc-600 text-2xl '> X </span>

                <Image width={26} height={26} src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" alt="Tailwindcss Icon SVG Vector Icon" />
                TailwindCSS
            </div>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1WdL1TLfkYo" // Replace with your video URL
                title="YouTube video player"
                frameBorder="0"
                className='my-10'
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>


            <div className='w-fit px-4 h-[50px] my-10 border rounded-xl text-[1.1em] font-semibold gap-2 flex justify-center items-center'>
                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z" fill={`${theme == 'light' ? 'black' : 'white'}`}/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="26" height="26" fill={``}/>
                    </clipPath>
                    </defs>
                </svg>

                NextJS

                <span className='font-normal text-zinc-600 text-2xl '> X </span>

                <Image width={26} height={26} src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" alt="Tailwindcss Icon SVG Vector Icon" />
                TailwindCSS
            </div>

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lw0dA3zZUDk" // Replace with your video URL
                title="YouTube video player"
                frameBorder="0"
                className='my-10'
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

        </div>

        //lw0dA3zZUDk


    );
};

export default Installation;
