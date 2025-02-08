import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Code from '@/components/Code';
import * as CodeSnippets from './code'; // Import all exports from code.js
import * as Components from '@/components/previews/Components'; // Import all components

export default function CodePreview({ component }) {
    const [Selected, setSelected] = useState('Preview');

    useEffect(() => {
        Prism.highlightAll();
    }, [Selected]);

    // Get the component dynamically
    const ComponentToRender = Components[component] || (() => <p>Component not found</p>);

    // Get the code snippet dynamically
    const code = CodeSnippets[component] || `// Code not found for ${component}`;

    return (
        <div className="my-10">
            <div className="border-b border-zinc-400 dark:border-zinc-800 h-15 flex gap-2 mb-5 w-[50em] py-2">
                <Button variant="ghost" onClick={() => setSelected('Preview')} className={`${Selected === 'Preview' && 'bg-secondary'} h-full`}>
                    Preview
                </Button>
                <Button variant="ghost" onClick={() => setSelected('Code')} className={`${Selected === 'Code' && '!bg-secondary'} h-full`}>
                    Code
                </Button>
            </div>

            {Selected === 'Preview' ? (
                <div className="relative w-[50em] h-[30em] bg-zinc-900 rounded-xl flex items-center justify-center">
                    <ComponentToRender />
                </div>
            ) : (
                <Code code={code} />
            )}
        </div>
    );
}
