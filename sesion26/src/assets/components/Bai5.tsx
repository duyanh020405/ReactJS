import React, { Component } from 'react'

export default class Bai4 extends Component {
  render() {
    return (
      <div style={{display:'flex',flexDirection:'row', gap:'30px'}}>
        <h3>Bai 5</h3>
        <div style={{position:'relative',width:'100px',height:'100px',backgroundColor:'yellow'}}>
        </div>
        <div style={{position:'relative',width:'100px',height:'100px',backgroundColor:'red'}}>
        </div>
        <div style={{position:'relative',width:'100px',height:'100px',backgroundColor:'orange'}}>
        </div>
      </div>
      
    )
  }
}

