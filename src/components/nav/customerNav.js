import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNavBar = () => {
    const navigate = useNavigate()
    

    return (
        <ul className="navbar">
           <li className="navbar__item active">
            <Link className="navbar__link" to="/">home</Link></li>
            <li className="navbar__item active">
            <Link className="navbar__link" to="/candies">candies</Link></li>
            
            <li className="navbar__item active">
                <Link classname="navbar__link" to="/candySearch">Find Candy</Link>
            </li>
            <li className="navbar__item active">
            <Link className="navbar__link" to="/location">locations</Link>
            </li> 
            <li className="navbar__item navbar__logout">
                
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}