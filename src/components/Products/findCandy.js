//customer clicks "find candy" nav link 
//presented with view with a text input labeled what candy are you looking for

export const CandySearch =({setterFunction})=>{

    return (
        <div>
            <input 
            onChange={
                (changeEvent)=>{
                    setterFunction(changeEvent.target.value)
                }
            }type="text" placeholder="What Candy are you looking for?"/>
        </div>
    )
}