"use client";
import Link from 'next/link';
import React from 'react'
import CodePreview from '../CodePreview';
import Terminal from '../Terminal';
import { ButtonUsage } from './usage';
import Code from '../Code';

const Button = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold mb-3">Button</h1>
            <p className="text-zinc-400 max-w-xl">Beautiful Button with ripple effect on click made with TailwindCSS, Framer motion, make sure to <Link href="/docs/installation" className="link">install dependencies</Link> before using them.</p>

            <CodePreview component="Button" className="max-w-2xl w-full max-h-[30em]" />

            <h1 className='title'>Installation</h1>
            <Terminal InstallerProp="npx" library="button" />

            <h1 className='title'>Usage</h1>
            <div className='relative flex flex-col gap-4 w-full max-w-2xl h-fit'>
                {
                    ButtonUsage.map((code, index) => {
                        return <Code className="w-full max-w-2xl" key={index} code={code} />
                    })
                }
            </div>

            <h1 className='title'>Variants</h1>
            {
            ["ButtonPrimary", "ButtonSecondary", "ButtonGhost", "ButtonOutline"].map((variant, index) => {
                return (
                    <CodePreview key={index} component={variant} className="max-w-2xl w-full max-h-[30em]" />
                )
            })
            }
        </>
    )
}

export default Button