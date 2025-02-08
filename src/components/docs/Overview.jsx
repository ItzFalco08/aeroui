import React from 'react';
import Link from 'next/link'
import CodePreview from '@/components/CodePreview';

const Overview = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-3">Overview</h1>
            <p className="text-zinc-400 max-w-xl">Overview of some components of our ui library with their code, make sure to <Link href="/docs/installation" className="link">install dependencies</Link> before using them.</p>

            <h1 className='title'>Spotlight Hero Section</h1>
            <CodePreview component="Hero1" />

            <h1 className='title'>Rounded Fixed Navbar</h1>
            <CodePreview component="Navbar1" />
        </div>
    );
};

export default Overview;