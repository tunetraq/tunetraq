import Link from 'next/link'
import { useState } from 'react';

import TopSponsoredContent from "./TopSponsoredContent"


function Tabs() {

        const YEAR = new Date().getFullYear();
        const [activeTab, setActiveTab] = useState("LINKS");
        const toggleTab = (label) => {
            setActiveTab(label);
        };

    return (
        <div className="mt-7 ">
            <div className="flex items-center justify-center space-x-4 sm:space-x-1 uppercase text-xs ">
                <div
                    onClick={() => toggleTab("LINKS")}
                 className={ activeTab === "LINKS" ? "flex px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-blue-500 font-bold transition-all duration-150 ease-in" : "flex font-bold px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-white"} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden md:block">Links</span>
                     </div>
                <div
                    onClick={() => toggleTab("LYRICS") }
                className={ activeTab === "LYRICS" ? "flex px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-blue-500 font-bold transition-all duration-150 ease-in" : "flex font-bold px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-white"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden md:block"> Lyrics</span>
                    </div>
                <div
                    onClick={() => toggleTab("SKIZA") }
                className={ activeTab === "SKIZA" ? "flex px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-blue-500 font-bold transition-all duration-150 ease-in" : "flex font-bold px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-white"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="hidden md:block">Skiza Tune</span>
                    </div>
                <div
                    onClick={() => toggleTab("STORE") }
                className={ activeTab === "STORE" ? "flex px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-blue-500 font-bold transition-all duration-150 ease-in" : "flex font-bold px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-white"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span className="hidden md:block">Store</span>
                    </div>
                <div
                    onClick={() => toggleTab("TICKETS") }
                className={ activeTab === "TICKETS" ? "flex px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-blue-500 font-bold transition-all duration-150 ease-in" : "flex font-bold px-2 py-1 sm:px-4 cursor-pointer text-gray-800 border-b-2 border-solid border-white"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd" />
                            <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                        </svg>
                      <span className="hidden md:block" >Tickets</span>
                    </div>
            </div>
        <div className="bg-gray-100">
            {/* Store */}
            <div className={ activeTab === "STORE" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-5 transition-all duration-150 ease-in " : "hidden"}>
                {/* <h2 className="font-bold text-xs uppercase text-gray-800">Shop As Seen</h2>
                <p className="text-xs text-gray-400 mb-3">Buy merchandise or products promoted by your favourite artist</p> */}
                <TopSponsoredContent/>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3">
                    <img className="h-24 flex-shrink-0 object-cover"  src="/assets/thumb2.jpg" alt="product image"/>
                    <div>
                        <h3 className=" text-xs text-gray-800 font-bold px-1 line-clamp-2">Respect the OG Khaligraph Jones Blue Hoodie [100% Cotton - Made in Kenya]</h3>
                        <p className="text-gray-400 text-xs mt-2 px-2 font-bold line-clamp-1">$35.99 - [ Stock - 10 pieces ]</p>
                        <div className="text-xs text-blue-500 font-bold px-2 mt-2 cursor-pointer uppercase">
                            <Link  href="#">Buy Now</Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3">
                    <img className="h-24 flex-shrink-0 object-cover"  src="/assets/thumb3.jpg" alt="product image"/>
                    <div>
                        <h3 className=" text-xs text-gray-800 font-bold px-1 line-clamp-2">Respect the OG Khaligraph Jones Bucket Hat</h3>
                        <p className="text-gray-400 text-xs mt-2 px-2 font-bold line-clamp-1">$25.50 - [ In Stock ]</p>
                        <div className="text-xs text-blue-500 font-bold px-2 mt-2 cursor-pointer uppercase">
                            <Link  href="#">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Lyrics */}
            <div className={activeTab === "LYRICS" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-5 transition-all duration-150 ease-in" : "hidden"}>
                {/* <h2 className="font-bold text-xs uppercase text-gray-800">Lyrics</h2>
                <p className="text-xs text-gray-400 mb-3">Learn the words and sing along to your favourite artist</p> */}
                <TopSponsoredContent/>
            <div className="bg-white shadow-lg mb-3 p-2">
                <div>
                    <p className="text-gray-800 font-bold text-xs">Writer & composer</p>
                    <p className="text-gray-400 text-xs">unknown</p>
                </div>
                <div>
                    <p className="text-gray-800 font-bold text-xs">Producer</p>
                    <p className="text-gray-400 text-xs">unknown</p>
                </div>
                <div>
                    <p className="text-gray-800 font-bold text-xs">Background vocals</p>
                    <p className="text-gray-400 text-xs">unknown</p>
                </div>
                <div>
                    <p className="text-gray-800 font-bold text-xs">Video director</p>
                    <p className="text-gray-400 text-xs">unknown</p>
                </div>
                <div>
                    <p className="text-blue-500 text-xs text-center pt-3 font-bold">Lyrics not found</p>
                </div>
                <div>
                    <p className="pt-4 text-center text-gray-400 text-xs uppercase">&copy; BRUCE MELody {YEAR}</p>
                </div>
            </div>
            </div>
            {/* Links */}
            <div className={activeTab === "LINKS" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-5 transition-all duration-150 ease-in" : "hidden"}>
                {/* <h2 className="font-bold text-xs uppercase text-gray-800">Stream & Download</h2>
                <p className="text-xs text-gray-400 mb-3">Listen to or buy songs from your favourite artist online</p> */}
                    <TopSponsoredContent/>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3 cursor-pointer">
                    <img className="h-14 w-24 flex-shrink-0 object-cover"  src="/assets/spotify.jpg" alt="product image"/>
                    <div className="flex-1">
                        <h3 className=" text-sm  text-gray-800 font-semibold px-2 line-clamp-2">Stream on Spotify</h3>
                        <p className="text-gray-400 text-xs mt-1 px-2 w-52 truncate">https://www.spotify.com/hghd64gfgd737</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3 cursor-pointer">
                    <img className="h-14 w-24 flex-shrink-0 object-cover"  src="/assets/deezer.jpg" alt="product image"/>
                    <div className="flex-1">
                        <h3 className=" text-sm  text-gray-800 font-semibold px-2 line-clamp-2">Stream on Deezer</h3>
                        <p className="text-gray-400 text-xs mt-1 px-2 w-52 truncate">https://www.boomplay.com/hghd64gfgd737</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3 cursor-pointer">
                    <img className="h-14 w-24 flex-shrink-0 object-cover"  src="/assets/napster.png" alt="product image"/>
                    <div className="flex-1 truncate">
                        <h3 className=" text-sm  text-gray-800 font-semibold px-2 line-clamp-2">Buy from Napster</h3>
                        <p className="text-gray-400 text-xs mt-1 w-52 truncate px-2">https://www.music.amazon.com/hghd64gfgd737</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3 cursor-pointer">
                    <img className="h-14 w-24 flex-shrink-0 object-cover"  src="/assets/soundcloud.jpg" alt="product image"/>
                    <div className="flex-1">
                        <h3 className=" text-sm  text-gray-800 font-semibold px-2 line-clamp-2">Listen on Soundcloud</h3>
                        <p className="text-gray-400 text-xs mt-1 px-2 w-52 truncate">Link not found</p>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3 cursor-pointer">
                    <img className="h-14 w-24 flex-shrink-0 object-cover"  src="/assets/youtube.png" alt="product image"/>
                    <div className="flex-1">
                        <h3 className=" text-sm  text-gray-800 font-semibold px-2 line-clamp-2">Subscribe on YouTube</h3>
                        <p className="text-gray-400 text-xs mt-1 px-2 w-52 truncate">https://www.youtube.com/hfhf63nhhf7hh</p>
                    </div>
                </div>
            </div>
            {/* skiza tune */}
            <div className={activeTab === "SKIZA" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-5 transition-all duration-150 ease-in" : "hidden"}>
                {/* <h2 className="font-bold text-xs uppercase text-gray-800">Skiza Tune</h2>
                <p className="text-xs text-gray-400 mb-3">Entertain your callers with a callback tune from your favourite artist</p> */}
                <TopSponsoredContent/>
                <p className="mt-10 px-16 text-center text-xs text-gray-500">This service is only available in kenya for Safaricom subscribers</p>
                <div className="mt-3 text-center cursor-pointer">
                <button className="uppercase text-xs text-blue-500 font-semibold hover:font-bold ">Get skiza tune here</button>
                </div>
            </div>
            {/* tickets */}
            <div className={activeTab === "TICKETS" ? "max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-2 lg:px-4 py-5 transition-all duration-150 ease-in" : "hidden"}>
                {/* <h2 className="font-bold text-xs uppercase text-gray-800">Events</h2>
                <p className="text-xs text-gray-400 mb-3">Buy tickets online to watch your favourite artist perfoming live on stage</p> */}
                <TopSponsoredContent/>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden mb-3">
                    <img className="h-24 flex-shrink-0 object-cover"  src="/assets/thumb2.jpg" alt="product image"/>
                    <div>
                        <h3 className=" text-xs text-gray-800 font-bold px-1 line-clamp-2">Safaricom live Naivasha</h3>
                        <p className="text-gray-400 text-xs mt-2 px-2 font-bold line-clamp-1">23rd December 2021</p>
                        <div className="text-xs text-blue-500 font-bold px-2 mt-2 cursor-pointer uppercase">
                            <Link  href="#">Book Your Ticket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Tabs
