import React, { Component } from 'react';

interface Bt1 {
  name: string;
}

export default class Bai1 extends Component {
  render() {
    let show: Bt1[] = [
      { name: "HTML" },
      { name: "JavaScript" },
      { name: "CSS" },
      { name: "ReactJS" },
    ];

    return (
      <div>
        <h4>Bai 1</h4>
        <ul>
          {show.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
