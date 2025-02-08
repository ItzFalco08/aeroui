import React from 'react';
import Link from 'next/link'

const Overview = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-3">Overview</h1>
            <p className="text-zinc-400 max-w-xl">Overview of some components of our ui library with their code, make sure to <Link href="/docs/installation" className="link">install dependencies</Link> before using them.</p>
        </div>
    );
};

export default Overview;