
import { useState } from 'react'
export default function Bt1() {
    const [click,setClick]=useState<string>("Click meeeee")
    const show=()=>{
        if(click==="Click meeeee"){
            setClick("Click")
        }
        else{
            setClick("Click meeeee")
        }
    }

  return (
    <div>
        <h4>Bt 1</h4>
      <button onClick={show}>{click}</button>
    </div>
  )
}
