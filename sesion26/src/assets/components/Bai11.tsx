import React, { Component } from 'react'

export default class Bai11 extends Component {
  render() {
    interface product{
      stt:number,
      code:number,
      name:string,
      age:number,
      sex:string
    }
    let products:product[]=[
      {
        stt:1,
        code:1,
        name:"one",
        age:12,
        sex:"male"
      },
      {
        stt:1,
        code:1,
        name:"one",
        age:12,
        sex:"male"
      },
      {
        stt:1,
        code:1,
        name:"one",
        age:12,
        sex:"male"
      },
      {
        stt:1,
        code:1,
        name:"one",
        age:12,
        sex:"male"
      },

    ]
    
    return (
        
    <div>
        <h3>Bai 11</h3>
        <div style={{backgroundColor:"grey",position:"relative",height:"40px",width:"1000px",textAlign:"center",display:"flex",flexDirection:"row",gap:"100px"}}>
        <div style={{position:"relative",height:"30px",width:"180px",backgroundColor:"blue",color:"white",marginTop:"5px"}}>Thêm sinh viên mới</div>
        <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
        <div style={{position:"relative",width:"300px",backgroundColor:"white",border:"1px solid black",color:"black"}}>Search here</div>
        <div style={{position:"relative",height:"30px",width:"100px",backgroundColor:"blue",color:"white",marginTop:"5px"}}>Tim kiem</div>
        </div>
        <div style={{position:"relative",width:"200px",backgroundColor:"white",border:"1px solid black",color:"black"}}>Sap xep</div>
        </div>
        <div style={{position:"relative",width:"1000px",height:"500px",backgroundColor:"white",color:"black ",fontSize:"xxl"}}>
         <h2>Danh sach sinh vien </h2>
         <table style={{border:"1px solid black",marginLeft:"220px"}}>
          <th>#</th>
          <th>Ma sinh vien</th>
          <th>Ten sinh vien</th>
          <th>Tuoi</th>
          <th>Gioi Tinh</th>
          <th>Hanh dong</th>
          {
          products.map((item,index)=>{
          return <tr>
            <td>{index+1}</td>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.sex}</td>
            <td style={{display:"flex",flexDirection:"row", gap:"20px"}}>
              <div style={{backgroundColor:"red",position:"relative",width:"60px",height:"40px",color:"white"}}>Xoa</div>
              <div style={{backgroundColor:"green",position:"relative",width:"60px",height:"40px",color:"white"}}>Them</div>
              <div style={{backgroundColor:"blue",position:"relative",width:"60px",height:"40px",color:"white"}}>Sua</div>
            </td>
            </tr>
            })
          }
         </table>


        </div>
        

    </div>
    )
  }
}
