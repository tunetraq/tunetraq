import SponsoredProfile from "./SponsoredProfile"
import VideoIframe from "./VideoIframe"

function VideoCOmponent() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:grid-cols-3 xl:max-w-4xl mx-auto">
                <section className="col-span-2">
                    <VideoIframe/>
                </section>
                <section className=" mt-4 ml-3 hidden xl:block">
                <SponsoredProfile/>
                </section>
          </main>
    )
}

export default VideoCOmponent
