import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"

const api = "http://localhost:8088"

export const BuildCandy = ()=>{
    const [newCandy, setNewCandy]=useState({
        productName:"",
        productTypeId: "",
        price:"",
        

    })
    
        const [storeInvt, setCandyStore] =useState({
            storeId:"",
            candyId:""
        })
    


    const [types, setTypes]=useState([])
    const [button, setButtonAction] = useState(false)
    const [locations, setLocations] = useState([])
    const [candies, setCandies]= useState([])
    const navigate = useNavigate()


    const sendNewCandy = ()=>{ 
        
        const freshCandy={
        
        productTypeId: parseInt(newCandy.productTypeId),
        productName: newCandy.productName,
        price: Number(newCandy.price)
        }

        return fetch(`${api}/products`,{
            method: "POST",// different types, post submits an entity to specified resource 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(freshCandy) 
            }
        )
        .then(response => response.json())
            .then(() => {
                navigate("/candies")
            })
            
    }
    const setCandiesStore =()=>{

        const storeCandy ={
            storeId: parseInt(storeInvt.storeId),
            candyId: candies.length
        }

        return fetch(`${api}/candyStores`,{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(storeCandy)
        }
        )
        .then(res =>res.json())
        .then(()=>{

        })

    }
    


    useEffect(
        ()=>{
            fetch(`${api}/productTypes`)
            .then(res => res.json())
            .then((data)=>{
                setTypes(data)
            })
        },
        []
    )
    useEffect(
        ()=>{
            fetch(`${api}/locations`)
            .then(res=>res.json())
            .then(
                (data) =>{
                    setLocations(data)
                }
            )
        },
        []
    )
    useEffect(
        ()=>{
            fetch(`${api}/products`)
            .then(res=>res.json())
            .then(
                (products)=>{
                    setCandies(products)
                }
            )
        },
        []
    )
    

    return <>
        <h2>create a new candy</h2>
        
        <section class="store">
            <h3>select a store location to sell the new candy</h3>
            {
                locations.map(
                    (location)=>{
                    return <><div><label for="selectedLocal">{location.name}</label>
                        <input type="radio" name="selectedLocal" 
                        value={location.id}
                        onChange={
                            (local)=>{
                                const place ={...storeInvt}
                                place.storeId = local.target.value
                                setCandyStore(place)
                            }
                        }></input> 
                        </div>                        
                    </>

                    }
                )
            }
        </section>
        <section class="candyTitle">
        <label class="label"for="candyName">Enter a Candy Name</label>
        <input 
        type="text" 
        id="candyName"
        className="candyName"
        value={newCandy.productName}
        onChange={
            (changeEvent)=>{
                const name ={...newCandy}
                name.productName = changeEvent.target.value
                setNewCandy(name)
            }
        }/>
        </section>
        <section class="candyClass">
        <h3>select a candy type</h3>
        <section>{
            types.map(
            (type)=>{
                return <><div><label for="candyType">{type.productType}</label>
                <input type="radio" id="candyType"name="candyType" 
                value={type.id}
                onChange={
                    (evt)=>{
                        const copy ={...newCandy}
                        copy.productTypeId = evt.target.value 
                        setNewCandy(copy)
                    }
                }></input></div>
                </>          
                }
            )
        }</section>
        </section>
        <h3>enter the price</h3>
        <label class="label"for="candyPrice">Enter a Price</label>
        <input 
        type="number" 
        className="candyPrice"
        value={newCandy.price}
        onChange={
            (changeEvent)=>{
                const prices = {...newCandy}
                prices.price = changeEvent.target.value
                setNewCandy(prices)
            }
        }
        />
        <button onClick={()=>{sendNewCandy() && setCandiesStore()}} >submit candy</button>

    
    
    
    
    </>




}