import Image from 'next/image';
import Tabs from './Tabs';


function VideoIframe() {

    const YEAR = new Date().getFullYear();

    return (
        <article className="mt-4 mx-1 border bg-white shadow-md mb-6">
            {/* video */}
            <div className="h-96" >
            {/* <Image className="object-cover mx-4 "  src="/assets/thumb1.jpg" width={900} height={500} /> */}
            <iframe src="/assets/video.mp4" frameBorder="0" width="100%" height="100%"></iframe>
            </div>
            {/* video title */}
            <div className="flex items-center p-2">
                <div>
                <img className="h-12 w-12 rounded-full object-cover border p-1" src="/assets/profile1.jpg" alt="profile picture"/>
                </div>
            <div className="ml-2 flex-1">
                    <h1 className="font-bold text-xs text-gray-800 line-clamp-2 capitalize">Sawa sawa ft Khaligraph Jones (Official Music Video)</h1>
                    <p className="text-xs text-gray-400 uppercase line-clamp-1">Bruce Melody</p>
                </div>
                <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                </div>
            </div>
            {/* video tabs */}
            <Tabs/>
            {/* copyright */}
            <div className="flex items-center bg-gray-100 text-xs text-gray-400 justify-center pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    <p>tunetraq &copy; {YEAR}. All rights reserved</p>
                    
                </div>
        </article>
    )
}

export default VideoIframe
