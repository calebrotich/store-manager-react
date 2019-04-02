import React, { Component } from 'react';
import '../public/css/main.css';


export default class Login extends Component {
  render() {
    return (
      <div class="main">
        
        <div id="admin">
          <h2 className="account">LOGIN</h2>
          <form id="loginform">
            <p className="inputfields">
              <label className="login">EMAIL</label> <br/>
              <input id="email" className="input" type="text"/>
            </p>
            <p className="inputfields bottomfield">
              <label className="login">PASSWORD</label><br/>
              <input id="password" className="input" type="password"/>
            </p>
            <input type="button" value="log in"/>
          </form>
        </div>
        
      </div>
    )
  }
}
