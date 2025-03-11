import React, { useEffect , useState } from 'react'
import RegisterInput from '../../components/RegisterInput/RegisterInput'
import { Form, Formik } from 'formik'
import Button from '../../components/Button/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginValidation } from '../../validation/Validation'
import { useMutation } from '@tanstack/react-query'
import { AxiosConfig } from '../../axios/AxiosConfig'
import { useAuth } from '../../context/AuthContext'
import toast from 'react-hot-toast'
import { color } from 'framer-motion'
import { isPending } from '@reduxjs/toolkit'


export default function Login() {
  const { login , user , token } = useAuth();
  const navigate = useNavigate();
    useEffect (() => {
          setTimeout(() => {
              window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                  
              })
          }, 0);
          
      }, [])

      const [messageinvalid, setmessageinvalid]=useState("");

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log("Login Form Values:", values);
    const result = await login(values);
    setSubmitting(false);
    if (result.success) {
      navigate('/');
      toast("Login successful", { icon: "👏"});
      console.log(user.documentId);
      sessionStorage.setItem("token", token);
      console.log(token);
      
      
      
    } else {
      setErrors({ password: "Invalid email or password" });
      setmessageinvalid("Invalid email or password");
      toast("Invalid email or password", { icon: "🚫"});
     
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className='LoginPage'>
    <div className='login-container' style={{marginBlock: "5em"}}>
        <h4>Login</h4>
        <p>If you have an account with us, please log in.</p>
        {messageinvalid && <p style={{ color: "red", fontSize:"1.2em", fontWeight:"400" }}>{messageinvalid}</p>}
        <Formik validationSchema={loginValidation}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}>
            <Form>
            <RegisterInput name={"email"} header={"Email"} placeholder={"Enter your email"}/>
            <RegisterInput name={"password"} header={"Password"} placeholder={"Enter your password"} />
            <Button text={"Login"} type={"submit"} />
            </Form>
        </Formik>
        <p>Don't have an account? <NavLink to="/SignUp">Sign Up</NavLink></p>
        
      
    </div>
    </div>
  )
}
