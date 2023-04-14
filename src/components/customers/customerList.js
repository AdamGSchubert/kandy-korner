import {useState, useEffect,Link} from "react"
import {useNavigate, useParams} from "react-router-dom"
import { Customer } from "./customer"
import "./customerList.css"

const api = "http://localhost:8088"

export const CustomerList =()=>{
    const navigate = useNavigate()


    const [customers, setCustomers] =useState([])
 

    useEffect(
        ()=>{
            fetch(`${api}/customers?_expand=user`)
            .then(res=>res.json())
            .then((patron)=>{
                setCustomers(patron)
            })
        },[]
    )
    
    return <>
        <h1>customers List</h1>
        <section className="
        customers">
            
                
                     <article className="customers" >
                    {
                        customers.map(customer => <Customer key={`customer--${customer?.user.id}`} 
                            id={customer?.user.id} 
                            fullName={customer?.user.name} 
                            email={customer?.user.email}/>)
                    }
                
                </article>
                
            

        </section>
    
    
    </>
}