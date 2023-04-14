import {useEffect,useState,Navigate} from "react"
import {useNavigate} from "react-router-dom"


const api = "http://localhost:8088"

export const NewUserForm =()=>{
    
    const navigate = useNavigate()
    const [newUser, setNewUser]=useState({
        name: "",
        email: "",
        isStaff: false
    })
    
    const sendNewUser =(evt)=>{
        evt.preventDefault()//cancel the refresh from the button
        const tempUser = {
            name: newUser.name,
            email: newUser.email,
            isStaff: newUser.isStaff
        }
        const employeeTest= newUser.isStaff

         return fetch(`${api}/users`,{
            method: "POST",// different types, post submits an entity to specified resource 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tempUser) 
            }
        )
        .then(response => response.json())
            .then(() => {
                if(employeeTest===true){navigate("/newHires")}
            
            
                else{
                    navigate("/")
                    }}
            )
    }


    return <>
        <section className="newUser">
            <h2>Register a new user</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text"
                
                
                className="form-control-name"
                placeholder="Enter the Person's full name"
                value={newUser.name}
                onChange={
                    (evt)=>{
                        const copy = {...newUser}
                        copy.name = evt.target.value
                        setNewUser(copy)
                }
                }
                 />
                 <label htmlFor="email">Enter the Users Email</label>
                 <input type="text"
                 
                 className="form-control-email"
                 placeholder="john.doe@email.com"
                 value={newUser.email}
                 onChange={
                    (event)=>{
                        const mail ={...newUser}
                        mail.email = event.target.value
                        setNewUser(mail)
                    }
                 }
                 />
                 <label htmlFor="staff">Check if new user will be an Employee.</label>
                 <input
                 type="checkbox"
                 
                 className="form-control-staff"
                 value={newUser.isStaff}
                 onClick={
                    (event)=>{
                        const staff = {...newUser}
                        staff.isStaff=event.target.checked
                        setNewUser(staff)
                    }
                 }

                 />

                <button onClick={(evt)=>{sendNewUser(evt)}}>create User</button>
            </form>

            
            
        </section>
    
    
    </>

}