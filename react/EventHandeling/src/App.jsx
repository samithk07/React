import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

let handelclick=()=>{
  alert("hey i am clicked")
}
let handelmouseover=()=>{
alert("i am a mouse hover")
}

  return (
    <>
    <div className='button'>
      <button onClick={handelclick}>Click me</button>
    </div>
    <div className="red" onMouseOver={handelmouseover}>
      I am a red Div
    </div>
    </>
  )
}

export default App
