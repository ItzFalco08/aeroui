import Image from 'next/image';

export default function Usage() {
    return (
        <div className="w-full h-screen  flex items-center justify-center">
            <div className ='flex flex-col items-center'>
                <Image src={'/logos2.svg'} width={100} height={0} alt='tech logos' className='w-[10em] sm:w-[11em] md:w-[12em] lg:w-[13em]' />
                <h1 className='text-foreground text-2xl sm:text-3xl md:text-4xl'>Simply Copy & Paste</h1>
                <p className='text-sm sm:text-md lg:text-md mt-2 max-w-xs sm:max-w-sm lg:max-w-md text-foreground/70 text-center'>Pick Your Favourite Technology and Copy and paste with our cli in no time</p>


                <div className='relative w-fit h-fit rounded-xl overflow-hidden  mt-8'>
                    <video src="/demo.mp4" source autoPlay loop muted className='relative w-[50em]' />
                </div>
            </div>
        </div>
    )
}