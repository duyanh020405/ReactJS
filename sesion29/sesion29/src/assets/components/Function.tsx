import React, { useState } from 'react'

export default function Function() {
    const [fullName, setFullName]=useState<string>("Hoa");
    const [age,setAge]=useState<number>(13)
    const [isOn, setOn]=useState<boolean>(true)
    const handleChange=()=>{
        setAge(age+1)
    }
  return (
    <div>
      {/* Dung de quan li du lieu trong components Đối với
        Function để quản lí dữ liệu dùng usestate, đây là 1 hook sinh ra 
        giúp function có thể quản lí dữ liệu 
        */ }
        <p>Xin chao {fullName}, nam nay {age} tuoi!</p>
        <button onClick={handleChange}>Change Age</button>
    </div>
  )
}
