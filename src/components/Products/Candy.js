import {useEffect,useState} from "react"

const api = "http://localhost:8088"
export const CandyProducts =()=>{
    const [candies, setCandies] = useState([])
    const localUser =localStorage.getItem("kandy_user")
    const currentUser = JSON.parse(localUser)
   
    const [employee, setEmployee]= useState([])
    const [filteredCandy, setFilteredCandy] = useState([])


    useEffect(
    ()=>{
        fetch(`${api}/products?_sort=productName&_order=asc`)
        .then(res =>res.json())
        .then(
            (candy)=>{
                setCandies(candy)
            }
        )

    },
    []
    )
    useEffect(
        ()=>{
            fetch(`${api}/employees`)
            .then(res=>res.json())
            .then(
                (employees)=>{
                    setEmployee(employees)
                })
            
        },
        []
    )

    useEffect(
        ()=>{
            
            if(employee.find(worker => parseInt(worker.userId) == parseInt(currentUser.id) )){
                setFilteredCandy(candies)
                //console.log("an employee")
            }
            else {
                const myCandy =candies.filter(candy => candy.productName === "Panda Cookies")
                setFilteredCandy(myCandy)
                //console.log("not employee")
            }
            

        },
        [employee]
    )
    

    return <>
        {/* {
            employee.length ===0

            ?<> <header>customers only</header></>
            :<>""
            </> 


        } */}
        
        <h2>List of all products available</h2>
            <section>
                <ul>{
                filteredCandy.map(
                    (candy)=>{
                        
                        return <li >{candy.productName} ${candy.price}</li>
                    }
                )
            }
            </ul>
            </section>
    
    
        </>



}