import React, { Component } from 'react'

export default class Bai10 extends Component {
  render() {
    return (
      <div>
        <h3>Bai 10</h3>
        <div style={{backgroundColor:'white',position:'relative',width:'500px',height:'400px'}}>
            <h2 style={{color:'black',textAlign:'center'}}>Quan li cong viec</h2>
            <div style={{display:'flex',flexDirection:'row',gap:'10px',marginLeft:'75px'}}>
                <div style={{position:'relative',width:'300px',height:'20px',border:'1px solid black',color:'black'}}>Them vao danh sach</div>
                <div style={{position:'relative',width:'50px',height:'22px',backgroundColor:'rgb(83, 83, 240)',color:'white'}}>Them</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'5px',marginLeft:'55px'}}>
            <p style={{color:'blue',marginRight:"320px"}}>Tat ca cong viec</p>
            <div style={{backgroundColor:'blue',position:'relative',width:'110px',height:'1px'}}></div>
            </div>
            <div style={{backgroundColor:'gray',position:'relative',width:'400px',height:'30px',marginTop:'30px',marginLeft:'55px'}}>
                <p><input type="checkbox" name="" id="" /> Cristiano Ronalddo       </p>
            </div>
            <div style={{backgroundColor:'gray',position:'relative',width:'400px',height:'30px',marginTop:'30px',marginLeft:'55px'}}>
                <del><input type="checkbox" name="" id="" /> Cristiano Ronalddo     </del>
            </div>

        </div>
      </div>
    )
  }
}
