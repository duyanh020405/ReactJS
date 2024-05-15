import React, { Component } from 'react'
interface State {
    name:string
}
interface Props {

}
export default class Class extends Component <Props,State>{
    constructor(props:Props){
        super(props)
        this.state ={
            name:"Minh Thu"
        }
    }
    changeC =()=>{
        if(this.state.name ==="Minh Thu"){
         this.setState({
            name:"Minh Gu"
         })
    }
else{
    this.setState({
        name:"Minh Thu"
     })
}}
  render() {
    return (
      <div>
        <p>Class</p>
        <p>Xinh chao {this.state.name}</p>
        <button onClick={this.changeC}>Click</button>
      </div>
    )
  }
}
