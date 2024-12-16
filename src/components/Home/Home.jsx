import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"
import Navbar from "../Navbar/Navbar"

const Home = () => {
  return (
    <div>
        <div>
        <Navbar/>
        <Outlet/>
        </div>        
        <Banner/>
    </div>
  )
}

export default Home