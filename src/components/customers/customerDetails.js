import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const api = "http://localhost:8088"
export const CustomerDetails =()=>{
    const {customerId}=useParams()
    const [customer, updateCustomer]= useState({})
    
    
    useEffect(
        ()=>{
            fetch(`${api}/users?isStaff=false&_embed=customers&id=${customerId}`)
            .then(res=>res.json())
            .then(
                (data)=>{
                    const singleCustomer = data[0]
                    updateCustomer(singleCustomer)
                }
            )

        },
        [customerId]
    )
    
    
    return <>
    <section className="customer" >
    <header>{customer.name}</header>
    <div>email: {customer.email}</div>
    <div>Loyalty Number: {customer?.customers?.[0]?.loyaltyNumber}</div>
    
    
    
</section>
    </>
}