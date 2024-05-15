import React, { Component } from 'react';

export default class Bai2 extends Component {
  a = 10;
  b = 10;
  c = this.a+this.b;
  d = this.a-this.b;
  e = this.a*this.b;
  f = this.a/this.b;

  render() {
    return (
      <div>
        <h3>Bai2</h3>
        <p>Ket qua</p>
        <p>{this.a}+{this.b}={this.c}</p>
        <p>{this.a}-{this.b}={this.d}</p>
        <p>{this.a}*{this.b}={this.e}</p>
        <p>{this.a}/{this.b}={this.f}</p>
      </div>
    );
  }
}

