import {useEffect,useState} from "react"

const api = "http://localhost:8088"
export const CandyProducts =()=>{
    const [candies, setCandies] = useState([])
    const localUser =localStorage.getItem("kandy_user")
    const currentUser = JSON.parse(localUser)
   
    const [employee, setEmployee]= useState([])
    const [filteredCandy, setFilteredCandy] = useState([])
    const [price, setPrice]= useState(false)
    const [types, setTypes]=useState([])


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
            fetch(`${api}/productTypes`)
            .then(res =>res.json())
            .then(
                (data)=>{
                    setTypes(data)
                }
            )
        }
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

    useEffect(
       ()=>{
        if(price === true){
        const topShelfCandy = candies.filter(candy=> candy.price > 2) //if the candy price is above 2 then push to filteredCandy
        setFilteredCandy(topShelfCandy)
        }
        else{
            setFilteredCandy(candies)
        }  
       },

       [price] //looks at price array for load
    )


    

    return <>
        {
            employee.find(worker => parseInt(worker.userId) == parseInt(currentUser.id))
            ?<>
                <button onClick={ ()=>{setPrice(true)}}>Top Priced</button>
                <button onClick={ ()=>{setPrice(false)}}>all Prices</button>
            
            </>
            :<>
            </>
        }
        
        <h2>List of all products available</h2>
        
            <section>
                <ul>{
                filteredCandy.map(
                    (candy)=>{
                         let candyType = types.find(type =>  parseInt(type.id) === parseInt(candy.productTypeId))
                         return <><li>{candy.productName} ${candy.price}</li><ul><li>{candyType?.productType}</li></ul></>
                    }
                )
            }
            </ul>
            </section>
    
    
        </>



}