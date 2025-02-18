import { Field } from 'formik'
import React from 'react'

export default function WrapperInput() {
  return (
    <div className='WrapperInput'>
      <label htmlFor="">Email</label>
      <Field/>
    </div>
  )
}
