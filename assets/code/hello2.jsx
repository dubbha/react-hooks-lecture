import React, { Component, useState } from 'react';

const Comp = ({ name }) => (<div>Hello, {name}!</div>);

export class Hello extends Component {
  render() {
    const { value, setValue } = useState('te');

    console.log('this line is gonna be exactly 80 chars beware of the wolves');

    return (<Comp name={value} />);
  }
}

