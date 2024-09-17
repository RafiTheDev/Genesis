import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import { Outlet } from "react-router-dom"

const Mainlayouts = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Mainlayouts