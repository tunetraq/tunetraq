import BottomNav from "./BottomNav"
import Header from "./Header"

function Layout({ children }) {
    return (
        <div>
            <Header/>
            {children }
            <BottomNav/>
        </div>
    )
}

export default Layout
