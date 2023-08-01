import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FormRow } from '../Components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo></Logo>
          <h4>Register</h4>
          <FormRow type='text' name='name' />
          <FormRow type='text' name='lastName' labelText='last name' />
          <FormRow type='text' name='location' />
          <FormRow type='email' name='email' />
          <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block'>submit</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register