import React, { Component } from 'react'

export default class Bai3 extends Component {
  name ="Duy"
  sex = "male"
  date=" 02/04/2005"
  email="duyanh@gmail.com"
  address="Phu Do ,Ha Noi"
  render() {
    return (
      <div>
        <h3>Bai 3</h3>
        <p>Ten :{this.name}</p>
        <p>Gioi tinh : {this.sex}</p>
        <p>Ngay sinh : {this.date}</p>
        <p>Email: {this.email}</p>
        <p>Dia chi : {this.address}</p>
        
      </div>
    )
  }
}
