import React from 'react'

export default function Button({text}) {
  return (
   <button className='btn' type='submit' >
<div className='btn_line'>
    <p>{text}</p>
</div>
   </button>
  )
}
