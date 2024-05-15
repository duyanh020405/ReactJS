import React, { Component } from 'react'
import Header from './Header'
import Nagation from './Nagation'
import Menu from './Menu'
import Navbar from './Navbar'
import Main from './Main'
export default class User extends Component {
  render() {
    return (
      <div>
        Bai 8
        <Header></Header>
        <Nagation></Nagation>
        <div style={{display:"flex",flexDirection:"row"}}>
            <Menu></Menu>
            <Main></Main>
            <Navbar></Navbar>
        </div>
      </div>
    )
  }
}
