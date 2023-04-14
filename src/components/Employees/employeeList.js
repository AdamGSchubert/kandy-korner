import {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"

const api = "http://localhost:8088"

export const EmployeeList =()=>{
    const navigate = useNavigate()


    const [users, setUsers] =useState([])
 

    useEffect(
        ()=>{
            fetch(`${api}/employees?_expand=location&_expand=user`)
            .then(res=>res.json())
            .then((workers)=>{
                setUsers(workers)
            })
        },[]
    )
    
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