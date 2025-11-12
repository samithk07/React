import React, { useState } from 'react'
function Counter() {


    let [count, setcount] = useState(0)
    let increment = () => {
        setcount(count + 1)
    }
    let decrement = () => {
        setcount(count - 1)
    }
    let rest = () => {
        setcount(0)
    }

    return <div className="counter-countainer">
        <p className="count-display">{count}</p>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={rest}>Rest</button>
        <button className='counter-button' onClick={increment}>Increment</button>
    </div>


}
export default Counter