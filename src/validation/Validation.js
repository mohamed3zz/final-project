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