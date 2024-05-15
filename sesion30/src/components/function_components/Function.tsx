import React, { useState } from 'react'

export default function Function() {
    /*
    event : su kien 
    onclick
    onchange
    oninput
    onkeydown
    onkeyup
    .....
    */
   const [name,setName] = useState<string>("Phan Van A")
   const changeName =()=>{
    setName("Van Van B")
    if (name === "Van Van B"){
        setName("Phan Van A")
    }
   }
  return (
    <div>
      <p>{name}</p>
      <button onClick={changeName}>Click </button>
    </div>
  )
}
