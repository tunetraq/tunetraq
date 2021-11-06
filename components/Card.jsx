import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactShowMoreText from 'react-show-more-text';

function Card() {

    const router = useRouter();

    return (
        <>
        <article className="mt-4 mx-1 border bg-white shadow-md ">
            {/* card header */}
            <div className="flex items-center p-2">
                <div>
                <img className="h-14 w-14 rounded-full object-cover border p-1" src="/assets/profile1.jpg" alt="profile picture"/>
                </div>
                <div className="ml-2 flex-1">
                    <p className="font-bold text-xs uppercase text-gray-800">Bruce Melody</p>
                    <p className="text-xs text-gray-400">Released 2 weeks ago</p>
                </div>
                <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                </div>
            </div>
            {/* card thumbnail */}
            <Image onClick={() => router.push('/play')} className="object-cover mx-4 cursor-pointer"  src="/assets/thumb1.jpg" width={900} height={500} />
            {/* card icons */}
            <div className="flex py-1 px-3">
                <div className="flex flex-1">
                    <div className="mr-5 cursor-pointer text-gray-600 hover:scale-125 transition-all duration-150 ease-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="mr-5 cursor-pointer text-gray-600 hover:scale-125 transition-all duration-150 ease-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="mr-5 cursor-pointer text-gray-600 hover:scale-125 transition-all duration-150 ease-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="mr-5 cursor-pointer text-gray-600 hover:scale-125 transition-all duration-150 ease-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div>
                    <div className="cursor-pointer text-gray-600 hover:scale-125 transition-all duration-150 ease-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* card title & text */}
            <div className="px-3 pb-2">
                <h1 onClick={() => router.push('/play')} className="font-bold text-sm text-gray-800 cursor-pointer capitalize line-clamp-2">Sawa sawa ft Khaligraph Jones (Official Music Video)</h1>
                <ReactShowMoreText
                    lines={2}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    className="text-gray-400 text-xs "
                    expanded={false}
                 
                 >
                 This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                 </ReactShowMoreText>
            </div>
            {/* card footer */}
            <div className="flex px-3 py-2 text-xs text-gray-400 border-t">
                <div className="flex flex-1">
                    <div className="flex justify-center mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span>9k Likes</span>
                    </div>
                    <div className="flex justify-center mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                        </svg>
                        <span>345 Dislikes</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>3.6m views</span>
                </div>
            </div>
        </article>

        {/* second card */}
        <article className="my-4 mx-1 border bg-white shadow-md">
            {/* card header */}
            <div className="flex items-center p-2">
                <div>
                <img className="h-14 w-14 rounded-full object-cover border p-1" src="/assets/profile2.jpg" alt="profile picture"/>
                </div>
                <div className="ml-2 flex-1">
                    <p className="font-bold text-xs uppercase text-gray-800">Otile Brown</p>
                    <p className="text-xs text-gray-400">Sponsored</p>
                </div>
                <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                </div>
            </div>
            {/* card thumbnail */}
            <Image onClick={() => router.push('/about2')} className="object-cover mx-4 cursor-pointer"  src="/assets/thumb3.jpg" width={900} height={500} />
            {/* card icons */}
            <div className="flex py-1 px-3">
                <div className="flex flex-1">
                    <div className="mr-5 cursor-pointer text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="mr-5 cursor-pointer text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="mr-5 cursor-pointer text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="mr-5 cursor-pointer text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div>
                    <div className="cursor-pointer text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* card title & text */}
            <div className="px-3 pb-2">
                <h1 onClick={() => router.push('/about2')} className="font-bold text-sm text-gray-800 cursor-pointer">Jamila ft Reekado Banks (Official Music Video)</h1>
                 <ReactShowMoreText
                    lines={2}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    className="text-gray-400 text-xs "
                    expanded={false}
                 
                 >
                 This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                This is the description of the song which if long should be trancated. This is the description of the song which if long should be trancated 
                 </ReactShowMoreText>
            </div>
            {/* card footer */}
            <div className="flex px-3 py-2 text-xs text-gray-400 border-t">
                <div className="flex flex-1">
                    <div className="flex justify-center mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span>9k Likes</span>
                    </div>
                    <div className="flex justify-center mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                        </svg>
                        <span>345 Dislikes</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>900k views</span>
                </div>
            </div>
        </article>
        </>
    )
}

export default Card


