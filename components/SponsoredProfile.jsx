import Image from 'next/image';


function SponsoredProfile() {

    const YEAR = new Date().getFullYear(); 

    return (
        <div className="sticky top-14">
            <div className="flex items-center p-2 border-b">
                <div>
                <img className="h-12 w-12 rounded-full object-cover border p-1 cursor-pointer" src="/assets/profile3.jpg" alt="profile picture"/>
                </div>
                <div className="ml-2 flex-1">
                    <p className="font-bold text-xs text-gray-800 cursor-pointer">Jidraff Gathura</p>
                    <p className="text-xs text-gray-400 font-bold cursor-pointer">$0.00 - user account</p>
                </div>
                <div className="cursor-pointer text-xs text-blue-500">Logout</div>
            </div>
            <div>
                <p className="text-xs pt-3">Sponsored:</p>
            </div>
            <div>
                <div className="flex items-center p-2">
                    <img className="h-12 w-19 mr-2 object-cover" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div>
                        <p className="text-xs font-bold text-gray-800 line-clamp-2">Baba lao remix ft Burna Boy (Official Music Video)</p>
                        <p className="text-xs text-gray-400 uppercase line-clamp-1">Diamond Platnumz</p>
                    </div>
                </div>
                <div className="flex items-center p-2">
                    <img className="h-12 w-19 mr-2 object-cover" src="/assets/thumb2.jpg" alt="advertiser logo" />
                    <div>
                        <p className="text-xs font-bold text-gray-800 line-clamp-2">Nairobi ft Nviri the Story Teller Sauti Sol and Mejja (Official Music Video)</p>
                        <p className="text-xs text-gray-400 uppercase line-clamp-1">Bensoul</p>
                    </div>
                </div>
                <div className="flex items-center p-2">
                    <img className="h-12 w-19 mr-2 object-cover" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div>
                        <p className="text-xs font-bold text-gray-800 line-clamp-2">Sina Ubaya (Official Music Video)</p>
                        <p className="text-xs text-gray-400 uppercase line-clamp-1">Zuchu and another long name that should be trancated</p>
                    </div>
                </div>
                <div className="flex items-center p-2">
                    <img className="h-12 w-19 mr-2 object-cover" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div>
                        <p className="text-xs font-bold text-gray-800 line-clamp-2">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
            </div>
                <div className="flex items-center text-xs text-gray-400 justify-center pt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    <p>tunetraq &copy; {YEAR} | All Rights Reserved</p>
                    
                </div>
        </div>
    )
}

export default SponsoredProfile
