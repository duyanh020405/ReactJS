import React, { Component } from 'react'
interface Props{
}
interface State{
    name:string,
    age:number,
    address:string
}
export default class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            name:"Duy Anh",
            age:18,
            address:"Ha Noi"
        }
    }
    handerClick=()=>{
        this.setState({
            age:244
        })
    }
  render() {
    return (
      <div>
        {this.state.name}
        {this.state.age}
        <button onClick={this.handerClick}>Click</button>
      </div>
    )
  }
}
