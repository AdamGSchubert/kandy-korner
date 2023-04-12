import {useState} from "react"
import { CandyProducts } from "./Candy"
import { CandySearch } from "./findCandy"

export const CandyContainer =()=>{
    const [candySearch, setCandySearch] =useState("")

    return <>
        <CandySearch setterFunction={setCandySearch}/>
        <CandyProducts candySearchState={candySearch}/>
    </>
}