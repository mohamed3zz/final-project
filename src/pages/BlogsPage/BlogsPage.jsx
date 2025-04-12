import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard';
import { getblogs } from '../../apis/FetchApi';

export default function BlogsPage() {
    const {data } = getblogs();
      console.log(data?.data?.data);
  return (
    <div className='BlogsPage'>
      <h2>BlogsPage</h2>
      <div className='Blogs_Container'> 
       {data?.data?.data.map((item) => (
           <BlogCard className='Blog_Container' key={item.id} documentId={item.documentId} blog_title={item.blog_title} blog_image={item.blog_image} blog_content={item.blog_content} />
       ))}
       

      </div>
      
    </div>
  )
}
