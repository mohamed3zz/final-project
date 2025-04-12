import React from 'react'

export default function BlogCard( {blog_title , blog_image , blog_content}) {
  return (
    <div className='BlogCard'>
        <div className='Blog_Image'>
            <img src={`${blog_image}`} alt="" />
        </div>
        <div className='Blog_Title'>
            <h3>{blog_title}</h3>
        </div>
        <div className='Blog_Content'>
            <p>{blog_content}</p>
        </div>
      
    </div>
  )
}
