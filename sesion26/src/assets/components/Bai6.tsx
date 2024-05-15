import React, { Component } from 'react'

export default class Bai6 extends Component {
    firstname="Duy"
    lastName ="Van Anh"
    fullName =" "+this.firstname +" "+ this.lastName
  render() {
    return (
      <div>
        <h3>Bai 6</h3>
    <p>Ten day du : {this.fullName}</p>
      </div>
    )
  }
}
