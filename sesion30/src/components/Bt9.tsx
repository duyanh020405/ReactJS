import { useState } from 'react'

export default function Bt9() {
    const [email,showEmail]=useState<string>("")
    const [password,showPassword]=useState<string>("")
    const show =()=>{
    let email = document.getElementById("email") as HTMLInputElement
    let password = document.getElementById("password") as HTMLInputElement
    if(email!=null){
        showEmail(email.value)
    }
    showPassword(password.value)

    }

  return (
    <div>
      <div >
        <h4>Bt 9</h4>
      <p>email :{email}</p>
        <p>password :{password}</p>
      </div>
      <input type="text" id='email' />
      <input type="text" id='password' />
      <button onClick={show}>Show</button>
    </div>
  )
}
