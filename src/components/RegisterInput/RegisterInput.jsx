import { Field } from 'formik'
import React from 'react'

export default function RegisterInput({name ,header , placeholder}) {
  return (
    <div className='RegisterInput'>
        {/* <h6>{header}</h6>
        <input type="text" placeholder={`${placeholder}`}  /> */}
        <label htmlFor={`${name}`}>{header}</label>
        <Field name={`${name}`} type={`${name}`} placeholder={`${placeholder}`}  />
    </div>
  )
}
