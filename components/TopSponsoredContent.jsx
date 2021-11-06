function TopSponsoredContent() {
    return (
        <div className="pb-4">
        <div className=" grid grid-cols-4">
            <div className="hidden md:block">
            <p className=" grid place-items-center text-xs font-semibold bg-red-100 text-gray-600 py-1 px-0">Sponsored Link</p>
            </div>
            <div className="md:hidden">
            <p className="grid place-items-center text-xs font-semibold bg-red-100 text-gray-600 py-1 px-o">Sponsored</p>
            </div>
        </div>
        <p className="ml-2 mt-1 font-semibold text-xs">#NRGWave Festival | Buju Banton. <span className="text-xs font-normal text-blue-500 cursor-pointer">Get your tickets</span></p>
        <div className="flex items-center ml-2 mt-1 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <p className=" text-gray-400 text-xs tracking-wider uppercase">NRG radio</p>
        </div>
        </div>
    )
}

export default TopSponsoredContent
