import React, { useEffect } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard';
import { getblogs } from '../../apis/FetchApi';

export default function BlogsPage() {
  useEffect (() => {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    
                })
            }, 0);
            
        }, [])
    const {data } = getblogs();
      console.log(data?.data?.data);
  return (
    <div className='BlogsPage'>
      <div data-aos="fade-down">
      <h2>BlogsPage</h2>
      <div className='Blogs_Container'> 
       {data?.data?.data.map((item) => (
           <BlogCard className='Blog_Container' key={item.id} documentId={item.documentId} blog_title={item.blog_title} blog_image={item.blog_image} blog_content={item.blog_content} />
       ))}
       
</div>
      </div>
      
    </div>
  )
}
