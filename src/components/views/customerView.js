
import {Outlet, Route, Routes} from "react-router-dom"
import { LocationList } from "../locations/locations"
import {CandyProducts} from "../Products/Candy"
import { CandyContainer } from "../Products/candyContainer"
import { CandySearch } from "../Products/findCandy"
import { BuildCandy } from "../Products/NewCandy"
import {useEffect, useState} from "react"

const api = "http://localhost:8088"
export const CustomerViews = () => {
    const localUser =localStorage.getItem("kandy_user")
    const currentUser = JSON.parse(localUser)

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
				
                <Route path="candySearch" element={<CandyContainer/>}/>
            
            </>
            
            

                
                
            </Route>
        </Routes>
    )
}

