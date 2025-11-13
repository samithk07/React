import React, { useState, useEffect, useRef } from 'react'

function MyComponent() {
    let inputRef = useRef(null)
    let inputRef1 = useRef(null)
    let inputRef2 = useRef(null)
    useEffect(() => {
        console.log("COMPONET RENDERED")
    })

    function handelClick1() {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }
    function handelClick2() {
        inputRef1.current.focus()
        inputRef.current.style.backgroundColor = ""
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
    }
    function handelClick3() {
        inputRef2.current.focus()
        inputRef.current.style.backgroundColor = ""
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "yellow"
    }
    return (
        <div>
            <button onClick={handelClick1}>
                Click me1
            </button>
            <input ref={inputRef} />


            <button onClick={handelClick2}>
                Click me2
            </button>
            <input ref={inputRef1} />

            <button onClick={handelClick3}>
                Click me3
            </button>
            <input ref={inputRef2} />
        </div>
    )
}
export default MyComponent

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";

// function MyComponent() {
//   const [activeInput, setActiveInput] = useState(null);

//   useEffect(() => {
//     console.log("COMPONENT RENDERED");
//   });

//   return (
//     <div>
//       {/* Input 1 */}
//       <button onClick={() => setActiveInput(1)}>Click me1</button>
//       <input
//         autoFocus={activeInput === 1}
//         style={{
//           backgroundColor: activeInput === 1 ? "yellow" : "",
//         }}
//       />

//       {/* Input 2 */}
//       <button onClick={() => setActiveInput(2)}>Click me2</button>
//       <input
//         autoFocus={activeInput === 2}
//         style={{
//           backgroundColor: activeInput === 2 ? "yellow" : "",
//         }}
//       />

//       {/* Input 3 */}
//       <button onClick={() => setActiveInput(3)}>Click me3</button>
//       <input
//         autoFocus={activeInput === 3}
//         style={{
//           backgroundColor: activeInput === 3 ? "yellow" : "",
//         }}
//       />
//     </div>
//   );
// }

// export default MyComponent;
