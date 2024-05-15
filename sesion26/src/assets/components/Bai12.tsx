import React, { Component } from 'react'

export default class Bai12 extends Component {
  render() {
    return (
       
      <div style={{display:"flex",flexDirection:"row"}}>
        <h4>Bai12</h4>
        <div style={{backgroundColor:"white",width:"600px",height:"680px", color:"black"}}>
            <h4>Countinute Shopping</h4>
            <div style={{backgroundColor:"grey",width:"600px",height:"1px"}}></div>
            <div style={{display:"flex",flexDirection:"row",gap:"200px"}}>
                <div>
                    <p>Shopping cart</p>
                    <p>You have 4 items in your shopping cart</p>
                </div>
                <p>Sort by price -</p>
            </div>
            <div>
                <div style={{display:"flex",flexDirection:"row",gap:"150px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5613/5613845cv11d.jpg" alt="" width={100} height={100}/>
                <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                   <b>Iphone 11 </b>
                   <p>253G , Navy blue</p>
                </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",gap:"20px",marginTop:"30px"}}>
                    <b>2</b>
                    <b>900$</b>
                    <b>Delete</b>
                </div>
                </div>
            </div>
            <div style={{marginTop:"30px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"150px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg" alt="" width={100} height={100}/>
                <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                   <b>Iphone 12 </b>
                   <p>253G , Navy blue</p>
                </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",gap:"20px",marginTop:"30px"}}>
                    <b>2</b>
                    <b>900$</b>
                    <b>Delete</b>
                </div>
                </div>
            </div>
            <div style={{marginTop:"30px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"150px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                <img src="https://tse4.mm.bing.net/th?id=OIP.2JfREDFMX96VodMXgG5zgAHaKE&pid=Api&P=0&h=180" alt="" width={100} height={100}/>
                <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                   <b>Iphone 13 </b>
                   <p>253G , Navy blue</p>
                </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",gap:"20px",marginTop:"30px"}}>
                    <b>2</b>
                    <b>900$</b>
                    <b>Delete</b>
                </div>
                </div>
            </div>
            <div style={{marginTop:"30px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"150px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
                <img src="https://tse1.mm.bing.net/th?id=OIP.VNjx1IuGuJpLTtzaaDz9BAHaJF&pid=Api&P=0&h=180" alt="" width={100} height={100}/>
                <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                   <b>Iphone 11 </b>
                   <p>253G , Navy blue</p>
                </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",gap:"20px",marginTop:"30px"}}>
                    <b>2</b>
                    <b>900$</b>
                    <b>Delete</b>
                </div>
                </div>
            </div>
        </div>




        <div style={{backgroundColor:"blue",width:"500px",height:"650px", color:"white"}}>
            <div style={{display:"flex",flexDirection:"row",gap:"270px",marginTop:"30px",marginLeft:"10px"}}>
            <h4>Cart detalis</h4>
            <img src="https://ttol.vietnamnetjsc.vn/images/2019/06/10/09/14/d8pi64rxoau0ibx-15601238775481684274358.jpg" alt="" width={50} height={50}  />
            </div>
            <p style={{marginLeft:"10px"}}>Cart type</p>
            <div  style={{display:"flex",flexDirection:"row",gap:"5px",marginLeft:"10px"}}>
                <img src="https://static.vecteezy.com/system/resources/previews/000/357/048/original/vector-credit-card-icon.jpg" alt="" width={40} height={25} />
                <img src="https://tse2.mm.bing.net/th?id=OIP.LMwzmOS4wFNhM1w_8S4THgHaEK&pid=Api&P=0&h=180" alt="" width={40} height={25} />
                <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/16/50/38/16503814-3373-45a2-4ce4-10e7df68bcd6/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="" width={40} height={25} />
                <img src="https://tse4.mm.bing.net/th?id=OIP.Hj8atp08zsZaOWABBv2JzAHaHa&pid=Api&P=0&h=180" alt="" width={40} height={25} />
            </div>
            <p style={{marginLeft:"20px",marginTop:40}}>Cartholder's Name</p>
            <p style={{marginLeft:"20px",marginTop:40}}>Cart number</p>
            <div style={{display:"flex",flexDirection:"row",gap:"150px",marginLeft:"20px"}} >
                <p>Expiration</p>
                <p>CCV</p>
            </div>
            <p style={{backgroundColor:"white" , width:500, height:0.2}}></p>
            <div style={{display:"flex",flexDirection:"row",gap:"150px",marginLeft:"20px"}}>
                <p>Subtotal</p>
                <p>$4798.00</p>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"150px",marginLeft:"20px"}}>
                <p>Shipping</p>
                <p>$20.00</p>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"110px",marginLeft:"20px"}}>
                <p>Total(incl.texts)</p>
                <p>$4818.00</p>
            </div>
            <button style={{height:30,width:200,backgroundColor:"yellow",marginLeft:"150px"}}>
                <div style={{display:"flex",flexDirection:"row",gap:"50px",textAlign:"center",color:"black"}}>
                    <p>$4818.00</p>
                    <p>Check out</p>
                </div>
            </button>


        </div>
      </div>
    )
  }
}
