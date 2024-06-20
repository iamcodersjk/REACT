import { Route, Routes ,Link} from "react-router-dom"
import Home from "./Home"
import About_us from "./About_us"
import  Services  from "./Services"

function Menu(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/a">About Us</Link></li>
                    <li><Link to="/s/web">Services</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/a" element={<About_us/>}/>
                <Route path="/s/:cid/" element={<Services/>}/>
            </Routes>
        </div>
    )
}
export default Menu