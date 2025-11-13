import React, { useEffect } from 'react'


// fetching using async/await

// const FetchData = () => {
//     let getdata=async()=>{
//         try{
//             let reponse =await fetch("https://jsonplaceholder.typicode.com/todos")
// let data= await reponse.json()
// console.log(data);


//         }catch(err){
// console.log(err);

//         }
//     }

//     useEffect(()=>{
//         getdata()
//     },[])


//fetching using fetch method
function FetchData () {

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(a=>a.json())
        .then(a=>console.log(a))

    },[])
    return (
      <div>
        Fetch Api
      </div>
    )
}
export default FetchData




