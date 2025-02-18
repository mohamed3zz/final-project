import React from 'react'
import RegisterInput from '../../components/RegisterInput/RegisterInput'
import { Form, Formik } from 'formik'
import Button from '../../components/Button/Button'
import WrapperInput from '../../components/WrapperInput/WrapperInput'
import { NavLink } from 'react-router-dom'
import { loginValidation } from '../../validation/Validation'
import { useMutation } from '@tanstack/react-query'
import { AxiosConfig } from '../../axios/AxiosConfig'
// import { loginValidation } from '../../validation/Validation'

export default function Login() {
 const LoginMutation = useMutation({
   mutationFn: () => AxiosConfig("auth/local" , {
     method: "POST",
   })
 })
  const onSubmit = (e) => {
    console.log(e);
    // e.preventDefault();
    LoginMutation.mutate()
    
  }
  
  return (
    <div className='LoginPage'>
        <h4>Login</h4>
        <p>If you have an account with us, please log in.</p>
        <Formik validationSchema={loginValidation} initialValues={{email: "", password: ""}} onSubmit={onSubmit}>
            <Form>
            <RegisterInput name={"email"} header={"Email"} placeholder={"Enter your email"} />
            <RegisterInput name={"password"} header={"Password"} placeholder={"Enter your password"} />
            <Button text={"Login"}/>
            </Form>
        </Formik>
        <p>Don't have an account? <NavLink to="/SignUp">Sign Up</NavLink></p>
        
      
    </div>
  )
}
