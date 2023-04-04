import { useEffect, useState} from "react"


export const LocationList =()=>{
    const [locations, setLocations] = useState([])

    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObj =JSON.parse(kandyUser)


     useEffect(
     () => {
        fetch("http://localhost:8088/locations")
        .then(res =>res.json())
        .then(
            (locals) =>{
                setLocations(locals)}
            
        )
     },
     []
     )

     useEffect(
        ()=>{
            if (kandyUserObj){
            setLocations(locations)
            }
        },
        [locations]
     )

     return <>
     {/* {
        //  honeyUserObject.staff
        //  ? <>
        //      <button onClick={ ()=> {setEmergency(true)} }>emergency only</button>
        //      <button onClick={ ()=> {setEmergency(false)} }>show all</button>
        //  </>
        //  : <>
        //      <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
        //      <button onClick={() => {updateOpenOnly(true)}}>Open Tickets</button>
        //      <button onClick={() =>{updateOpenOnly(false)} }>All Tickets</button>
        //   </>
     } */}
     
 <h2>List of Locations</h2>
     <article className="locations">

         {
             locations.map(
                 (location)=> {
                     return <section className="ticket" key={`location--${location.id}`}>
                         <ul>
                            <li>{location.name}</li>
                            <li>Address: {location.address}</li>
                            <li>Square footage: {location.sqft}</li>

                         </ul>
                         
                     </section>
                 }
             )
         }
    </article>
    </>




}
