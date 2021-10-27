import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-gray-50" >
      <Head>
          <title>tunetraq - Tracking the world's music.</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <Feed/>
      </div>
    </div>
  )
}
