import { Link, useNavigate } from "react-router-dom"
import { CustomerNavBar } from "./customerNav"
import { EmployeeNavBar } from "./employeeNav"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const localUser =localStorage.getItem("kandy_user")
    const currentUser = JSON.parse(localUser) 


    if(currentUser.staff){
        return <EmployeeNavBar/>
    }
    else{
        return <CustomerNavBar/>
    }

    
}

