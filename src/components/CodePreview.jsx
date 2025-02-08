import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'
import Code from '@/components/Code'

export default function CodePreview() {
    const [Selected, setSelected] = useState('Preview');

    useEffect(() => {
        // Highlight the code when the component mounts
        Prism.highlightAll();
    }, [Selected]); // Re-run the effect when `code` changes

    const code = `import React, { useEffect, useState } from 'react';
import {Button} from '@/components/ui/button'
import Code from '@/components/Code'

export default function CodePreview() {
useEffect(() => {
    // Highlight the code when the component mounts
    Prism.highlightAll();
}, []); // Re-run the effect when  changes

const [Selected, setSelected] = useState('Preview');

return (
    <div className='my-10'>

    {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code}/>}

    </div>
            <div className='my-10'>

    {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code}/>}

    </div>
            <div className='my-10'>

    {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code}/>}

    </div>        <div className='my-10'>

    {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code}/>}

    </div>        <div className='my-10'>

    {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code}/>}

    </div>
            <div className='my-10'>

    {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code}/>}

    </div>
            <div className='my-10'>

    {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code}/>}

    </div>
);
}
`


    return (
        <div className='my-10'>
            <div className=' border-b border-zinc-400 dark:border-zinc-800 h-15 flex gap-2 mb-5 w-[50em] py-2'>
                <Button variant="ghost" onClick={() => setSelected('Preview')} className={`${Selected == 'Preview' && 'bg-secondary'} h-full`}>Preview</Button>
                <Button variant="ghost" onClick={() => setSelected('Code')} className={`${Selected == 'Code' && '!bg-secondary'} h-full`}>Code</Button>
            </div>

            {Selected == 'Preview' ? <div className='w-[50em] h-[30em] bg-zinc-900 rounded-xl'></div> : <Code code={code} />}

        </div>
    );
}
