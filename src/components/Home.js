import React, { Component } from 'react';
import '../public/css/main.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
            <ul>
                <li className="list-item">
                    <p>Product: Phone</p>
                    <p>Price: Ksh. 2000000</p>
                    <p>Available stock: 20</p>
                </li>
                <li className="list-item">
                    <p>Product: Televishion</p>
                    <p>Price: Ksh. 1000000</p>
                    <p>Available stock: 40</p>
                </li>
                <li className="list-item">
                    <p>Product: Fridge</p>
                    <p>Price: Ksh. 300000</p>
                    <p>Available stock: 100</p>
                </li>
                <li className="list-item">
                    <p>Product: Car</p>
                    <p>Price: Ksh. 350000</p>
                    <p>Available stock: 140</p>
                </li>
                
            </ul>
        </div>
      </div>
    )
  }
}

