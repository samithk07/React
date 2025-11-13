import React, { useState } from 'react'

function From() {

    let [user, setUser] = useState()
    let [password, setPassword] = useState()
    let [userError, setUserError] = useState(false)
    let [passwordError, setPasswordError] = useState(false)



    let handelSubmit = (a) => {
        if (user.length < 3 || password.length < 3) {
            alert("Please Enter Correct Values")
        } else {
            alert("Login Successful")
        }
        a.preventDefault()
    }


    let handelUser = (a) => {
        let item = a.target.value
        if (item.length < 3) {
            setUserError(true)
        } else {
            setUserError(false)
        }
        setUser(a.target.value)
    }
    let handelPassword = (a) => {
        let items = a.target.value
        if (items.length < 3) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        setPassword(a.target.value)
    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <h1>Form Validation</h1>
                User Name:<input type='text' placeholder='Enter User Name' onChange={handelUser} value={user}></input>
                <br />
                {userError ? "Invalid User Name" : ""}
                <br />

                <br />
                <br />
                Password:<input type='text' placeholder='Enter Password' onChange={handelPassword} value={password}></input>
                <br />
                {passwordError ? "Invalid Password" : ""}
                <br />
                <br />
                <button>Submit</button>
            </form>

        </>
    )
}

export default From
