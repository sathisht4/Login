import React, { Component } from 'react'

export default class App extends Component {



validate = event =>{
    alert("Login Success")
  }
  
  render() {
      return (
        <div>
         <input type="text" name="usernameinput"/>
         <input type="password" name="passwordinput"/>
         <button onClick={this.validate}>Submit</button>
        </div>
        );
      }
    }
