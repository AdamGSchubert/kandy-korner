import {Outlet, Route, Routes} from "react-router-dom"
import { LocationList } from "../locations/locations"
import {CandyProducts} from "../Products/Candy"
import { CandyContainer } from "../Products/candyContainer"
import { CandySearch } from "../Products/findCandy"
import { BuildCandy } from "../Products/NewCandy"
import {useEffect, useState} from "react"
import { EmployeeViews } from "./employeeView"
import { CustomerViews } from "./customerView"

const api = "http://localhost:8088"
export const ApplicationViews = () => {

    const localUser =localStorage.getItem("kandy_user")
    const currentUser = JSON.parse(localUser) 
     
    if(currentUser.staff){
        return <EmployeeViews/>
    }
    else {
       return <CustomerViews/>
    }
}
