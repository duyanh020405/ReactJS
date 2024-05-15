import React from 'react'
import { useState } from 'react'
export default function Bt7() {
    const [arr,showArr]=useState<number[]>([])
    const showArr2=()=>{
        showArr([1,2,3,4,5,6,7])
    }


  return (
    <div>
        <h4>Bt 7</h4>
        <p>[{
            arr.map((item,index)=>{
                return <span key={index}>{item},</span>
            })
            }]</p>
      <button onClick={showArr2}>Show Arr</button>
    </div>
  )
}
