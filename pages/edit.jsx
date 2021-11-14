import Head from 'next/head'
import LoginRequest from "../components/LoginRequest"

function edit() {
    return (
        <>
        <Head>
          <title>Edit - champez ft burner boy</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="bg-gray-100 min-h-screen grid place-items-center">
            <LoginRequest 
            heading="Add Content"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>}
            info="To add links, lyrics and more to your YouTube videos"
            
            />
        </div>
        </>
    )
}

export default edit
