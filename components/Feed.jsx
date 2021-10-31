import Card from "./Card"
import MiniProfile from "./MiniProfile"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:grid-cols-3 xl:max-w-4xl mx-auto ">
                <section className="col-span-2">
                    <Card/>
                </section>
                <section className=" mt-4 ml-3 hidden xl:block">
                    <MiniProfile/>
                </section>
          </main>
    )
}

export default Feed
