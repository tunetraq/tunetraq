import Head from 'next/head'
import LoginRequest from "../components/LoginRequest"

function notifications() {
    return (
        <>
        <Head>
          <title>My notifications - tunetraq</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="bg-gray-100 min-h-screen grid place-items-center">
            <LoginRequest 
            heading="Notifications"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>}
            info="To see your account notifications"
            
            
            />
        </div>
        </>
    )
}

export default notifications
