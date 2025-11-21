// import React, { useState } from 'react'

// const useCounter = (initialValue=0) => {
//     let [count,setCount]=useState(initialValue)


//     let increment=()=>setCount(count+1)
//     let decrement=()=>setCount(count-1)
//     let reset=()=>setCount(initialValue)
//   return{count,increment,decrement,reset}
// }

// export default useCounter

import React, { useState } from 'react'

const useCounter = () => {
    let [count,setCount]=useState(0)
    let increment=()=>setCount(count+1)
    let decrement=()=>setCount(count-1)
    let reset=()=>setCount(count=0)
  return{count,increment,decrement,reset}
}

export default useCounter
