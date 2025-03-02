import Image from 'next/image';

export default function Usage() {
    return (
        <div className="w-full h-screen  flex items-center justify-center">
            <div className ='flex flex-col items-center'>
                <Image src={'/logos2.svg'} alt='tech logos' width={200} height={0}  />
                <h1 className='text-foreground text-4xl'>Simply Copy & Paste</h1>
                <p className='mt-2 max-w-md text-foreground/70 text-center'>Pick Your Favourite Technology and Copy and paste with our cli in no time</p>


                <div className='relative w-fit h-fit rounded-xl overflow-hidden  mt-8'>
                    <video src="/demo.mp4" source autoPlay loop muted className='relative w-[50em]' />
                </div>
            </div>
        </div>
    )
}