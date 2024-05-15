import React from 'react'
import { useState } from 'react'
export default function Bt2() {
    const [input,show]=useState<string>("")
    const data=()=>{
        let input = document.getElementById("data") as HTMLInputElement
        if(input!=null){
            show(input.value)
        }
    }
  return (
    <div>
        <h4>Bai 2</h4>
        <p>Data :{input}</p>
        <input type="text" id='data'/>
      <button onClick={data}>show data</button>
    </div>
  )
}
