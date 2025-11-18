import React from 'react'
import axios from "axios"
// import "./MyComponent.css"
import { useState,useEffect } from 'react'
const MyComponent = () => {
    let [products,setProducts]=useState([])
    let [error,setError]=useState("")


useEffect(() => {
axios.get("https://dummyjson.com/products")
.then((a)=>setProducts(a.data.products))
.catch((error)=>console.log(error))
}, [])    
  return (
  <>
  {error !== "" && error}
  {products.map((a,b)=>{
    return <h3 key={b}>{a.title}-${a.price}</h3>
  })}
  </>
  )
}

export default MyComponent
