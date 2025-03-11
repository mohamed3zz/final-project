import React from 'react'

export default function Button({text, onClick, type}) {
  return (
   <button className='btn' type={`${type}` || "button"} onClick={onClick} >
<div className='btn_line'>
    <p>{text}</p>
</div>
   </button>
  )
}
