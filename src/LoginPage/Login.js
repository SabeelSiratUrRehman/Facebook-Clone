import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
function Login(){
    return(
        <div className="Login">
        <div className="facebook">
        <div className="facebooktext">
          facebook
          <div className="title">
          Facebook helps you connect and share 
          <br></br>with the people in your life.
          </div>
        </div>
      </div>
      <div className="login">
        <div className="logindetail">
        <input type="email"placeholder="Email address or Phone Number"/>
        <br></br>
        <input type="Password"placeholder="Password"/>
        <br></br>
        <button className="btn">
        <Link to="/HomePage">Log In</Link>    
            </button>
        <div className="forget">
          <a href="forget">Forgotten account?</a>
          <br></br>
        </div>
      </div>
      <div className="create">
        <br></br>
        <button className="btns">
          Create New Account
        </button>
      </div>
      <p></p>
      <br></br>
      <div className="page">
        <a href="createpage">Create a Page </a>
        for a celebrity, band or business.
      </div>
      </div>
        </div>
    )
}
export default Login