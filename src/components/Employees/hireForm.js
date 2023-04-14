import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

const api = "http://localhost:8088"

export const NewHireForm =()=>{
    const navigate = useNavigate()
    const [newEmployee, setNewEmployee] = useState({
        userId:"",
        locationId:"",
        startDate:"",
        payRate: ""
    })
    const [users, setUsers] = useState([])
    const [locations, setLocations]=useState([])




    useEffect(()=>{
        fetch(`${api}/users?isStaff=true`)
        .then(res=>res.json())
        .then((employeeUsers)=>{
            setUsers(employeeUsers)
        })},
        []
    )
    useEffect(
        ()=>{
            fetch(`${api}/locations`)
            .then(res=>res.json())
            .then((locations)=>{
                setLocations(locations)
            })
        },[]
    )

     const newHire =(evt)=>{
        evt.preventDefault()//cancel the refresh from the button
        const tempEmployee = {
            userId: parseInt(newEmployee.userId),
            locationId: parseInt(newEmployee.locationId),
            startDate: newEmployee.startDate,
            payRate: parseInt(newEmployee.payRate)
        }
        const employeeTest= newEmployee.isStaff
         return fetch(`${api}/employees`,{
            method: "POST",// different types, post submits an entity to specified resource 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tempEmployee) 
            }
        )
        .then(response => response.json())
        .then(() => {
           navigate("/employeeList")
     })
    }

    return <>
        <section className="newHire">
        <h2>Please fill out the form below for new Employees</h2>

        
            <h2>Register a new user</h2>
            <form>
            <form name="form1" id="form1" action="/action_page.php">
            Select the new Employee user:
            : <select name="subject" id="subject" onChange={
                    (evt)=>{
                        const copy = {...newEmployee}
                        copy.userId = evt.target.value
                        setNewEmployee(copy)
                }
                }>
            <option value="default" placeholder="select a user">select a user</option>
             {
            users.map((user)=>{
            return <option value={user.id} >{user.name}</option>})
            }
            </select>

            </form>
            
            <section>
                <h3>select a work location</h3>{
            locations.map(
            (location)=>{
                return <><div><label for="workPlace">{location.name}</label>
                <input type="radio" id="workPlace"name="workplace" 
                value={location.id}
                onChange={
                    (evt)=>{
                        const workPlace ={...newEmployee}
                        workPlace.locationId = evt.target.value 
                        setNewEmployee(workPlace)
                    }
                }></input></div>
                </>          
                }
            )
        }</section>
            <label htmlFor="date">enter the employee start date.</label>
            <input
            type="date"
            id="date"
            className="form-control-date"
            //value={newEmployee.startDate}
            onChange={
            (event)=>{
                const start = {...newEmployee}
                const dateformat =new Date(event.target.value).toLocaleDateString('EN-US',{month:"long", day:"numeric", year:'numeric',timeZone:"UTC" })
                start.startDate= dateformat
                setNewEmployee(start)
                }
            }/>

            <label htmlFor="payRate">enter the pay Rate per hour</label>
            <input type="number"
            className="form-control-pay"
            id="payRate"
            value={newEmployee.payRate}
            onChange={
                (evt)=>{
                    const pay = {...newEmployee}
                    pay.payRate = Intl.NumberFormat().format(evt.target.value)
                    setNewEmployee(pay)
                }
            }    
                />
                <button onClick={(evt)=>{newHire(evt)}}>Submit Employee Information</button>
            </form>

        </section>
    
    
    </>
}