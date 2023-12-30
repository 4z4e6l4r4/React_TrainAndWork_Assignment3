import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginRegister extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}><button style={{background:"black",color:"white"}}>Home</button> </Link>
        
      </div>
    )
  }
}
