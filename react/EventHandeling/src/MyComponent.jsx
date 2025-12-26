// import React from 'react'
// import axios from "axios"
// // import "./MyComponent.css"
// import { useState,useEffect } from 'react'
// const MyComponent = () => {
//     let [products,setProducts]=useState([])
//     let [error,setError]=useState("")


// useEffect(() => {
// axios.get("https://dummyjson.com/products")
// .then((a)=>setProducts(a.data.products))
// .catch((error)=>console.log(error))
// }, [])    
//   return (
//   <>
//   {error !== "" && error}
//   {products.map((a,b)=>{
//     return <h3 key={b}>{a.title}-${a.price}</h3>
//   })}
//   </>
//   )
// }

// export default MyComponent


// import React, { useState,useEffect } from 'react'
// import axios from "axios"

// const MyComponent = () => {
//   let [products,setProducts]=useState([])
//   let[error,setError]=useState("")

// useEffect(() => {
// axios.get("https://dummyjson.com/products")
// .then ((a)=>setProducts(a.data.products))
// .catch((error)=>console.log(error))
// }, [])

//   return (
//     <>
//       {error!==""&& error}
//       {products.map((a,b)=>{
//         return<p key={b}>{a.title}-${a.price}</p>
//       })}
//     </>
//   )
// }

// export default MyComponent

// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// const MyComponent = () => {
//   let [products,setProducts]=useState([])
//   let [error,setError]=useState("")

//   useEffect(() => {
//   axios.get("https://dummyjson.com/products")
//   .then ((a)=>setProducts(a.data.products))
//   .catch((error)=>console.log(error)
//   )
//   }, [])
//   return(
//     <>
//     {error !== "" && error}
//     {products.map((a,b)=>{
//       return<p key={b}>{a.title}-${a.price}</p>
//     })}

//     </>
//   )

// }

// export default MyComponent
// import React, { useState,useEffect } from 'react'
// import axios from "axios"
// const MyComponent = () => {
//   let [products,setProducts]=useState([])
//   let [error,setError]=useState("")

//   useEffect(() => {
//   axios.get("https://dummyjson.com/products")
//   .then((a)=>setProducts(a.data.products))
//   .catch((error)=>console.log(error)
// )}, [])
//   return (
//     <>
//     {error !== "" && error}
// {products.map((a,b)=>{
//   return<p key={b}>{a.title}-${a.price}</p>
// })}

//     </>
//   )
// }

// export default MyComponent



// import React from 'react'

// const MyComponent = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default MyComponent

///////////////////////////////////////////this is todo list/////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react'

// const MyComponent = () => {
//   let [task,setTask]=useState("")
//   let [todos,setTodos]=useState([])


// let handelTask=()=>{
//   if(task.trim==="")return

//   setTodos([...todos,task])
//   setTask("")
// }




//   return (
//     <div>
//       <h3>Simple Todo List</h3>
//       <input
//       type='text'
//       placeholder='Enter Task...'
//       value={task}
//       onChange={(a)=>setTask(a.target.value)} ></input>
//       <button onClick={handelTask }>Add</button>

//       {/* <h3>{todos}</h3> */}
//       <ul>
//         {todos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//     </div>
//   )
// }

// export default MyComponent

///////////////////////////////////////////Todo List with Delete button//////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react'

// const MyComponent = () => {
//   let [task, setTask] = useState("")
//   let [todos, setTodos] = useState([])

//   let handelAdd = () => {
//     if (task.trim() == "") return;
//     setTodos([...todos, task])
//     setTask("")
//   }
//   let deletHandel = (index) => {
//     let filtere = todos.filter((_, i) => i !== index)
//     setTodos(filtere)
//   }


//   return (
//     <div>
//       <input type="text"
//         placeholder='Enter a task....'
//         value={task}
//         onChange={(a) => setTask(a.target.value)}

//       />
//       <button onClick={handelAdd}>Add</button>
//       <ul>
//         {todos.map((a, b) => (
//           <li key={b}>{a}
//           <button onClick={()=>deletHandel(b)}>Delete</button>
          
//           </li>
//         ))}
//       </ul>


//     </div>
//   )
// }

// export default MyComponent


// ????????????????????????????????????????????????????Use Reduce Example????????????????????????????????????????????????????????????????????????????????????????????????????????

// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };

//     case "DECREMENT":
//       return { count: state.count - 1 };

//     case "RESET":
//       return { count: 0 };

//     default:
//       return state;
//   }
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <h1>UseReducer Example</h1>
//       <h2>Count: {state.count}</h2>

//       <button onClick={() => dispatch({ type: "INCREMENT" })}>
//         Increment
//       </button>

//       <button onClick={() => dispatch({ type: "DECREMENT" })}>
//         Decrement
//       </button>

//       <button onClick={() => dispatch({ type: "RESET" })}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default App;


// import  { useEffect, useState } from 'react'
// const lights=[
//     {color:"red",duration:4000},
//     {color:"yellow",duration:3000},
//     {color:"green",duration:2000},
// ]

// const MyComponent = () => {
//     const [index,setIndex]=useState(0)
//     useEffect(() => {
//     const timer=setTimeout(()=>{
//         setIndex((a)=>(a+1)%lights.length)
//     },lights[index].duration)
//     return()=>clearTimeout(timer)
//     }, [index])
//   return (
//     <>
//     <div style={{background:"black",width:50,padding:5,marginLeft:700,marginTop:250}}>
//         {lights.map((a,b)=>(
//             <div key={a.color}
//             style={{backgroundColor:b===index?a.color:"white",
//                 width:50,
//                 height:50,
//                 borderRadius:"50%",
//                 marginBottom:5
//             }}
            
//             />
//         ))}
      
//     </div>
//         </>
//   )
// }

// export default MyComponent


// import React, { useState,useEffect } from 'react'
// const lights =[
//     {color:"red",duration:4000},
//     {color:"yellow",duration:3000},
//     {color:"green",duration:2000},
// ]
// const MyComponent = () => {
//     const [index,setIndex]=useState(0)
//     useEffect(() => {
//     const timer=setTimeout(()=>{
//         setIndex((a)=>(a+1)%lights.length)

//     },lights[index].duration)
//     return(()=>clearTimeout(timer))
//     }, [index])
//   return (
//     <>
//     <div style={{background:"black",width:50,padding:5}}>
//         {lights.map((a,b)=>(
//             <div key={a.color}
//             style={{backgroundColor:b===index?a.color:"white",
//                 width:50,
//                 height:50,
//                 borderRadius:"50%",
                

//             }}
            
            
            
//             />
//         ))}
      
//     </div>
//     </>
//   )
// }

// export default MyComponent


import React, { useState } from "react";

const MyComponent = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setTodo([
      ...todo,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);

    setText("");
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todo.map((a) => (
          <li key={a.id}>
            {a.text}
            <button onClick={() => deleteTodo(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;


