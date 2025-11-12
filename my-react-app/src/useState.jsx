import React, { useState } from 'react'

function MyComponent() {
    let [name, setName] = useState("guest")
    let [age, setAge] = useState(0)
    let [isemployed,setIsEmployed]=useState(false)

    let updateName = () => {
        setName("Samith")
    }

    let incrementAge = () => {
        setAge(age + 1)
    }
let employestatus=()=>{
    setIsEmployed(!isemployed)
}

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age}</p>
            <button onClick={incrementAge}>increment age</button>

            <p>Is Employed: {isemployed ? "yes":"no"}</p>
            <button onClick={employestatus}>toggle status</button>
        </div>
    )
}
export default MyComponent