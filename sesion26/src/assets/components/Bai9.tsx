import React, { Component } from 'react'

export default class Bai9 extends Component {
  render() {
    return (
      <div>
        <h3>Bai 9</h3>
        <div style={{ backgroundColor:'gray',position:'relative',width:'400px',height:'50px',display:'flex',flexDirection:'row',gap:'31px'}}>
            <p>Stt</p>
            <p>Ho va ten</p>
            <p>Gioi tinh</p>
            <p>Dia chi</p>
            <p>Hanh dong</p>
        </div>
        <div style={{ backgroundColor:'white',position:'relative',width:'400px',height:'60px',display:'flex',flexDirection:'row',gap:'30px',color:'black'}}>
            <p>1</p>
            <p>Phan Van Manh</p>
            <p>02/04/2005</p>
            <p>Khu2</p>
            <p style={{display:'flex',flexDirection:'row',gap:'5px'}}><div style={{ backgroundColor:'red',position:'relative',width:'30px',height:'20px',color:'white',border:'1px solid black'}}>Xoa</div>
            <div style={{ backgroundColor:'white',position:'relative',width:'30px',height:'20px',color:'black',border:'1px solid black'}}>Sua</div>
            </p>
        </div>
        <div style={{ backgroundColor:'white',position:'relative',width:'400px',height:'60px',display:'flex',flexDirection:'row',gap:'30px',color:'black'}}>
            <p>2</p>
            <p>Phan Van Hi</p>
            <p>05/01/2015</p>
            <p>Khu5</p>
            <p style={{display:'flex',flexDirection:'row',gap:'5px'}}><div style={{ backgroundColor:'red',position:'relative',width:'30px',height:'20px',color:'white',border:'1px solid black'}}>Xoa</div>
            <div style={{ backgroundColor:'white',position:'relative',width:'30px',height:'20px',color:'black',border:'1px solid black'}}>Sua</div>
            </p>
        </div>
      </div>
    )
  }
}
