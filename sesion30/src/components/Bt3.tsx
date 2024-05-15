import React from 'react'
import { useState } from 'react'
export default function Bt3() {
    const [date,setDate]=useState<string>('')
    const set =()=>{
        let date = document.getElementById("date") as HTMLInputElement
        setDate(date.value)
    }
  return (
    <div>
        <h4>Bt 3</h4>
        <p>Date :{date}</p>
      <input type="date" id='date' />
      <button onClick={set}>Click</button>
    </div>
  )
}
