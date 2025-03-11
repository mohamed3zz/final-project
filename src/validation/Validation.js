// import * as yup from "yup";
// export const loginValidation = yup.object({
//     email: yup.string().email().required("Email is required"),
//     password: yup.string().min(6).required("Password is required"),
// })
import * as yup from "yup";

export const loginValidation = yup.object({
    email : yup.string().email().required("Email is required"),
    password : yup.string().min(6).required("Password is required"),
})

export const signUpValidation = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Must be a valid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});