import {Outlet, Route, Routes} from "react-router-dom"
import { LocationList } from "../locations/locations"
import {CandyProducts} from "../Products/Candy"
import { CandyContainer } from "../Products/candyContainer"
import { CandySearch } from "../Products/findCandy"
import { BuildCandy } from "../Products/NewCandy"
import {useEffect, useState} from "react"
import { NewUserForm } from "../users/newUsers"
import { NewHireForm } from "../Employees/hireForm"
import { EmployeeList } from "../Employees/employeeList"
import { CustomerList } from "../customers/customerList"
import { Customer } from "../customers/customer"
import { CustomerDetails } from "../customers/customerDetails"
const localUser =localStorage.getItem("kandy_user")
const currentUser = JSON.parse(localUser)
const api = "http://localhost:8088"
export const EmployeeViews = () => {


	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>kandy Korner</h1>
                    <div>Your one-stop-shop to get all your sweet fixes</div>

                    <Outlet />
					
                </>
            }>
           
             
           
            <>
                <Route path="location" element={ <LocationList /> } />
				<Route path="candies" element={<CandyProducts/>}/>
				<Route path="candyForm" element={<BuildCandy/>}/>
                <Route path="candySearch" element={<CandyContainer/>}/>
                <Route path="/registerUser" element={<NewUserForm/>}/>
                <Route path="newHires" element={<NewHireForm/>}/>
                <Route path="employeeList" element={<EmployeeList/>}/>
                <Route path="customerList" element={<CustomerList />}/>
                <Route path="customers" element={<Customer/>}/>
                <Route path="customers/:customerId" element={<CustomerDetails/>} />

            </>
            
            

                
                
            </Route>
        </Routes>
    )
}
