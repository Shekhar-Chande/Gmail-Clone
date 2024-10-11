import Navbar from "../../Components/Navbar/Navbar"
import Leftbar from "../../Components/Leftbar/Leftbar"
import Middle from "../../Components/Middle/Middle"
import Rightbar from "../../Components/Rightbar/Rightbar"
import './Home.css'
function Home() {
    return (
        <>
            <Navbar />
            <div className="body">
                <Leftbar />
                <Middle/>
                <Rightbar />
            </div>

        </>
    )
}

export default Home