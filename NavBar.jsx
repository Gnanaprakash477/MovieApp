
import { Link } from "react-router-dom"

function NavBar(){

    return(
        <nav className="Navbar">
           <div className="left-navbar">
            <Link to='/' className="nav-links">Movies Home</Link>
           </div>
           <div className="right-navbar">
            <Link to='/' className="nav-links">Movies</Link>
            <Link to='/favorites' className="nav-links">Favorites</Link>
           </div>
        </nav>
    )
}

export default NavBar