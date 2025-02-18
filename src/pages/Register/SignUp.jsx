import { Form, Formik } from 'formik'
import React from 'react'
import RegisterInput from '../../components/RegisterInput/RegisterInput'
import Button from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  return (
    <div ClassName="SignUp">
    <div className='SignUpContainer'>
      <h4>Sign Up</h4>
      <Formik>
        <Form>
          <div className='name'>
            <RegisterInput name={"first_name"} header={"First Name"} placeholder={"Enter your first name"} />
            <RegisterInput name={"last_name"} header={"Last Name"} placeholder={"Enter your last name"} />

          </div>
          <RegisterInput name={"email"} header={"Email"} placeholder={"Enter your email"} />
          <RegisterInput name={"password"} header={"Password"} placeholder={"Enter your password"} />
          <Button text={"Sign Up"} />
        </Form>
      </Formik>
      <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
      </div>
    </div>
  )
}
