import React, { useEffect } from 'react'

export default function AboutUsPage() {
    useEffect (() => {
          setTimeout(() => {
              window.scrollTo({
                  top: 0,
                  // behavior: "smooth",
                  
              })
          }, 0);
          
      }, [])
  return (
    <div className='AboutUsPage'>
      {/* <div ClassName= 'sec1'>
       <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/breadcumb.jpg?v=1721459508&width=1300" alt="" />
       <div className='sec1_content'>
        <h1>ABOUT US</h1>
        </div>

        </div>
          */}
          {/* <h1>ABOUT US</h1> */}
          <div className='aboutsec1'>
            <h1>ABOUT US</h1>
            </div>
          <div className='aboutsec2'>

            <div className='aboutsec2_content'>
              <div className='aboutsec2_content_title'>
              <h2>Our Story</h2>
              <h6> THE HIGH STRESS FAVOUTIRE</h6>
              </div>
              <p>Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.</p>
              <p>In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

            </div>
            <div className='aboutsec2_img'>
              <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/about1-1.jpg?v=1721464451&width=896" alt="" />
            

            </div>
            
        
</div>
          
          <div className='aboutsec3'>
          <div className='aboutsec3_img'>
              <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/about1-2.jpg?v=1721464451&width=896" alt="" />
            </div>
            <div className='aboutsec3_content'>
            <div className='aboutsec3_content_title'>
              <h2>Who We Are ?</h2>
              <h6>THE HIGH STRESS FAVOUTIRE</h6>
              </div>
              <p>Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.</p>
              <p>In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</div>

          </div>
          <div className='aboutsec4'>
          <div data-aos="fade-down" className='aboutsec4_content'>
            <div className='container'>
              <h2>Design</h2>
              <p>Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero</p>
            </div>
            <div className='container'>
              <h2>Inovation</h2>
              <p>Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero</p>
            </div>
            <div className='container'>
              <h2>Journey</h2>
              <p>Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero</p>
            </div>
</div>
          </div>
        </div>
  )
}
