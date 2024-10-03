import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AppLayOUt = () => {
    return (
        <div className="max-w-full">
            <div className="bg-blue-400 fixed w-full">
                <Header />
            </div>
            <div className="flex justify-betwee w-full">
                <div className="bg-blue-400 h-screen w-[18%] fixed text-white">
                    <SideBar />
                </div>
                <div className="p-2 w-[100%]  h-screen  ml-[18%] mt-[60px]">
                    <Outlet />
                </div>
            </div>
            <div className=""> <Footer /></div>
        </div>
    )
}

export default AppLayOUt