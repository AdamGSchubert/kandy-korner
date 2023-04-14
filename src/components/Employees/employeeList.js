import {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"

const api = "http://localhost:8088"

export const EmployeeList =()=>{
    const navigate = useNavigate()
    const {employeeId}=useParams()

    const [users, setUsers] =useState([])
    const [employees, setEmployees]=useState([])
    const [locations, setLocations]=useState([])

    useEffect(
        ()=>{
            fetch(`${api}/employees?_expand=location&_expand=user`)
            .then(res=>res.json())
            .then((workers)=>{
                setUsers(workers)
            })
        },[]
    )
    // useEffect(
    //     ()=>{
    //         fetch(`${api}/employees`)
    //         .then(res=>res.json())
    //         .then((workers)=>{
    //             setUsers(workers)
    //         })
    //     },[]
    // )
    // useEffect(
    //     ()=>{
    //         fetch(`${api}/users?isStaff=true`)
    //         .then(res=>res.json())
    //         .then((workers)=>{
    //             setUsers(workers)
    //         })
    //     },[]
    // )
    return <>
        <h1>Employee List</h1>
        <section className="employees">
            {
                users.map((worker)=>{
                    return <div><ul><li>name: {worker.user.name}</li><li>Start date: {worker.startDate}</li><li>Location: {worker?.location?.name}</li></ul></div>
                }
                )
            }

        </section>
    
    
    </>
}