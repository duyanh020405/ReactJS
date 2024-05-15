import React, { Component } from 'react'

export default class Bai8 extends Component {
  render() {
    return (
      <div>
        <h3>Bai 8</h3>
        <div style={{textAlign:'center',position:'relative',width:'400px',height:'50px',backgroundColor:'gray'}}>Header</div>
        <div style={{textAlign:'center',position:'relative',width:'400px',height:'20px',backgroundColor:'rgb(62, 57, 57)',color:'white'}}>Nagative</div>
         <div style={{display:'flex',flexDirection:'row'}}>
            
            <div style={{textAlign:'center',position:'relative',width:'100px',height:'300px',backgroundColor:'green',color:'white'}}>Menu</div>
              <div style={{textAlign:'center',position:'relative',width:'200px',height:'300px',backgroundColor:'white',color:'black'}}>
                <br />
                <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                </div>
                <br />
                <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                </div>
                <br />
                <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                </div>
                <br />
                <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                <div  style={{textAlign:'center',position:'relative',width:'42px',height:'42px',backgroundColor:'pink',color:'white'}}>item</div>
                </div>

              </div>
            <div style={{textAlign:'center',position:'relative',width:'100px',height:'300px',backgroundColor:'blue',color:'white'}}>Article</div>
          </div>
       
      </div>
    )
  }
}
