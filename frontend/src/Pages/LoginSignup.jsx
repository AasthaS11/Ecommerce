import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Continue</button>
         
        <p className='loginsignup-login'>Already have an account? <span>Login</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms and conditions of privacy policy</p>
        </div> 
        </div>
        </div>
  )
}
