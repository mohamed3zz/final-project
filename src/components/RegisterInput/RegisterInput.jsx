import { Field } from 'formik'
import React from 'react'

export default function RegisterInput({name ,header , placeholder}) {
  return (
    <div className='RegisterInput'>
        <label htmlFor={`${name}`}>{header}</label>
        <Field name={`${name}`} type={`${name}`} placeholder={`${placeholder}`}  />
    </div>
  )
}
