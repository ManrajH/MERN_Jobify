import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'

const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to= '/login'>Login Page</Link>
    </div>
  )
}

export default Register