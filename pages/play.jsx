import Head from 'next/head'
import VideoComponent from '../components/VideoComponent'


function PlayVideo() {
    return (
        <div className="bg-gray-100 min-h-screen ">
            <Head>
                <title>Playing - Sawa sawa ft Khaligraph Jones (Official Music Video) by Bruce Melody.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
      <div>
          <VideoComponent/>
      </div>
        </div>
    )
}

export default PlayVideo
