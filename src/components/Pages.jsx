export default function Pages() {
    return (
        <div className="w-full h-fit  ">
            <div>
                <p className="text-zinc-300">Components</p>
                <h1 className="max-w-2xl font-semibold text-foreground text-4xl">Beautiful Ui Components made by focusing in quality over quantity</h1>
                <p className="text-zinc-300 mt-4">50+ Beautifully crafted components to kickstart your next project.</p>
            </div>

            <div className="w-full grid grid-cols-4 mt-12 gap-4 h-fit bg-red-300 ">
                <div className="w-full h-[14em] bg-red-500"></div>
                <div className="w-full h-[14em] bg-red-500"></div>
                <div className="w-full h-[14em] bg-red-500"></div>
                <div className="w-full h-[14em] bg-red-500"></div>
                <div className="w-full h-[14em] bg-red-500"></div>
                <div className="w-full h-[14em] bg-red-500"></div>
                <div className="w-full h-[14em] bg-red-500"></div>
            </div>
        </div>
    )
}