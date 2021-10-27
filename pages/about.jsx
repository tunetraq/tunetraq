import Head from 'next/head'

function about() {
    return (
        <div className="bg-gray-50 h-screen">
            <Head>
                <title>tunetraq - About us.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="max-w-4xl lg:mx-auto">
                <p>This is the about us page</p>
            </main>
        </div>
    )
}

export default about
