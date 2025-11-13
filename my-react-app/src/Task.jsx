import React, { useState } from 'react'
import "./Task.css"

function Task  () {
    let [dark,setDark]=useState(false)

function toggleTheme(){
    setDark(!dark)
}

  return (
    <div className={dark?"app dark":"app light"}>
        <h1>{dark?"Dark Theme 🌚":"Light Theme🌞"}</h1>
      <button className='theme-btn' onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}

export default Task
