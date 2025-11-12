import React, { useState } from "react";
import { useEffect } from "react";
import "./MyComponent.css";

function MyComponent() {
    let [name, setName] = useState("Guest")
    let [quantity, setQuantity] = useState(1)
    let [comment, setComment] = useState("")
    let [payment, setPayment] = useState("")
    let [shipping,setShipping]=useState("")


    function handelNameChange(event) {
        setName(event.target.value)
    }
    function handelQuantity(event) {
        setQuantity(event.target.value)
    }


    function handelComment(event) {
        setComment(event.target.value)
    }
    function handelPayment(event) {
        setPayment(event.target.value)
    }
function handelShipping(event) {
    setShipping(event.target.value)
    
}

    return (
        <div>
            <h1>Input Box</h1>
            <input value={name} onChange={handelNameChange}></input>
            <p>Name:{name}</p>

            <input value={quantity} onChange={handelQuantity} type="number"></input>
            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={handelComment} placeholder="enter Delivery Instructions"></textarea>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={handelPayment}>
                <option value="">Select An Option</option>
                <option value="Visa">VISA</option>
                <option value="MasterCard">MASTER CARD</option>
                <option value="UPI ">UPI</option>
            </select>

            <p>Payment:{payment}</p>
<label>
    <input type="radio"value="Pick up"
    checked={shipping==="Pick up"}
    onChange={handelShipping}/>
    Pick up
</label><br/>

<label>
    <input type="radio"value="Delivery"
    checked={shipping==="Delivery"}
    onChange={handelShipping}/>
    Delivery
</label>

<p>Shipping:{shipping}</p>



        </div>
    )
}
export default MyComponent