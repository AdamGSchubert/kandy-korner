import {Outlet, Route, Routes} from "react-router-dom"
import { LocationList } from "../locations/locations"
import {CandyProducts} from "../Products/Candy"


export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>kandy Korner</h1>
                    <div>Your one-stop-shop to get all your sweet fixes</div>

                    <Outlet />
					
                </>
            }>
				<Route path="location" element={ <LocationList /> } />
				<Route path="candies" element={<CandyProducts/>}/>

                
                
            </Route>
        </Routes>
    )
}
