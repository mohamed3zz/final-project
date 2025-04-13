import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import RegisterInput from '../../components/RegisterInput/RegisterInput'
import Button from '../../components/Button/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import toast from 'react-hot-toast'

export default function SignUp() { 
  const { register } = useAuth();
  const navigate = useNavigate();
    useEffect (() => {
          setTimeout(() => {
              window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                  
              })
          }, 0);
          
      }, [])

const onSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
  console.log("Sign Up Form Values:", values);
  const result = await register(values);
  setSubmitting(false);
  if (result.success) {
    navigate('/');
  } else {
    setErrors({ email: "Registration failed" });
  }
  resetForm();
};
  return (
    <div className='SignUpPage'>
    <div ClassName="SignUp" style={{marginBlock: "5em"}}>
    <div className='SignUpContainer'>
      <h4>Sign Up</h4>
      <div data-aos="fade-down">
      <Formik
        initialValues={{
          username: "", 
          email: "",
          password: "",
        }}
        onSubmit={onSubmit} >
        <Form>
          <div className='name'>
            <RegisterInput name={"first_name"} header={"First Name"} placeholder={"Enter your first name"} />
            <RegisterInput name={"last_name"} header={"Last Name"} placeholder={"Enter your last name"} />

          </div>
          <RegisterInput name={"username"} header={"Username"} placeholder={"Enter your username"} />
          <RegisterInput name={"email"} header={"Email"} placeholder={"Enter your email"} />
          <RegisterInput name={"password"} header={"Password"} placeholder={"Enter your password"} />
          <Button text={"Sign Up"} type={"submit"} />
        </Form>
      </Formik>
      </div>
      <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
      </div>
    </div>
    </div>
  )
}
