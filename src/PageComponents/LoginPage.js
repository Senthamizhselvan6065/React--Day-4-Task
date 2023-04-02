import React from 'react'
import BaseApp from '../BaseApp/BaseApp'

const LoginPage = () => {
  return (
   <BaseApp title="Login">
    <div className='LoginPage'>
        <div className='form'>
            <h1 className='login-tilte'>Welcome Back</h1>
            <div className='form-gurop'>
               <input placeholder='Enter Email Address'/>
               <input placeholder='Password'/>
               <div className='a-link'>
               <p className='link'><a href='null'>Forgot Password?</a></p>
               <p className='link'><a href='null'>Create an Account!</a></p>
               </div>
            </div>
            <div className='btn'>
              <button className='btn-log'>Login</button>
              <button className='btn-google'>Login With Google</button>
              <button className='btn-facebook'>Login With Facebook</button>
            </div>
        </div>
    </div>
    </BaseApp>
  )
}

export default LoginPage