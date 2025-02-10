import React from 'react'

export default function Button({text}) {
  return (
   <button className='btn'>
<div className='btn_line'>
    <p>{text}</p>
</div>
   </button>
  )
}
