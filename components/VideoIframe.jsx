import Image from 'next/image';
import Tabs from './Tabs';


function VideoIframe() {
    return (
        <article className="mt-4 mx-1 border bg-white shadow-md mb-6">
            {/* video */}
            <Image className="object-cover mx-4 "  src="/assets/thumb1.jpg" width={900} height={500} />
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
            {/* vote button */}
        </article>
    )
}

export default VideoIframe
