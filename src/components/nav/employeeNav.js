import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const EmployeeNavBar = () => {
    const navigate = useNavigate()
    
    return (
        <ul className="navbar">
           <li className="navbar__item active">
            <Link className="navbar__link" to="/">home</Link></li>
            <li className="navbar__item active">
            <Link className="navbar__link" to="/candies">candies</Link></li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/candyForm">Add Candy</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/candySearch">Find Candy</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/registerUser">Register New User</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employeeList">Employee List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customerList">Customer List</Link>
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