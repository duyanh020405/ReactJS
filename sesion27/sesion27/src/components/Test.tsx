import React, { Component } from 'react'
export default class Test extends Component {
  render() {
    let fullName:string = " hi hi"
    let age:number= 25
    let student ={
        name:"Hoa",
        age:20,
        address:"hà nội"
    }
    interface Product{
      name:string,
      price:number,
      id:number
    }
    let number:number[]=[1,2,3,4,5]
    let students:string[]=["duy","anh","dep","trai"]

    let products:Product[] =[
      {
        name:"iphone5",
        price:3000,
        id:1
      },
      {
        name:"iphone6",
        price:4000,
        id:2
      },
      {
        name:"iphone7",
        price:5000,
        id:3
      }
    ]

    return (
      
      <div>
        <p>ten tao la {fullName},tao nam nay {age} , hoc sinh tao ten la {student.name}, obj :{JSON.stringify(student)}</p>
        <p>mang :</p>
        <ul>
          {number.map((item,index,array)=>{
            return <li>{item}</li>
  })}
        </ul>
        <ul>
          {students.map((item,index,arr)=>{
            return <li>{item}</li>
          })}
        </ul>
        <table>
          <th>Stt</th>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          {
          products.map((item,index)=>{
          return <tr>
            <td>{index+1}</td>
            <td>{item.id}</td>
          <td>{item.name}</td>
            <td>{item.price}</td>
            </tr>
            })
          }
        </table>
      </div>
    )
  }
}
