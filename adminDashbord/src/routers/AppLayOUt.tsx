import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AppLayOUt = () => {
    return (
        <div className="bg-gray-300 ">
            <div className="bg-red-300">
                <Header />
            </div>
            <div className="flex">
                <div className="bg-blue-400  text-white">
                    <SideBar />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <div className="bg-red-300"> <Footer /></div>

        </div>
    )
}

export default AppLayOUt