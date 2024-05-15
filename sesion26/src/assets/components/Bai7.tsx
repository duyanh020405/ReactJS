import React, { Component } from 'react'

export default class Bai7 extends Component {
  render() {
    return (
      <div>
        <h3>Bai 7</h3>
        <div style={{textAlign:'center',position:'relative',width:'610px',height:'30px',backgroundColor:'gray'}}>Header</div>
         <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{textAlign:'center',position:'relative',width:'30%',height:'300px',backgroundColor:'blue'}}>Menu</div>
          <div>
          <div style={{textAlign:'center',position:'relative',width:'310px',height:'270px',backgroundColor:'white',color:'black'}}>Main</div>
          <div style={{textAlign:'center',position:'relative',width:'100%',height:'30px',backgroundColor:'gray'}}>Footer</div>
            
          </div>
        </div>

        
      </div>
    )
  }
}
