import React from 'react'
import { IoLogoTwitter, IoMdCheckmarkCircle } from 'react-icons/io'
import { TiSocialSkype } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { GrAmex } from "react-icons/gr";
import { SiMastercard } from "react-icons/si";
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_content'>
        <ul  className='lg-footer' >
          <li className='footer_logo'><h3>MOTOSPORT</h3></li>
          <li>Praesent nec nisl a purus blandit viverra. Pellentesque habitant morbi tristique senectuse.</li>
          <li>Address: 1234 Heaven Stress,USA.</li>
          <li>Email: hello@domain.com</li>
          <li>Fax: (+84) 1800 68 68</li>
        </ul>
        <ul className='footer_desktop'>
          <li className='footer_title'>Info</li>
          <li>Custom Service</li>
          <li>F.A.Q.'s</li>
          <li>Ordering Tracking</li>
          <li>Contact Us</li>
          <li>Events</li>
          <li>Popular</li>
        </ul>
        <ul className='middle_footer_mobile'>
          <li className='footer_title'>Services</li>
          <li>Sitemap</li>
          <li>Privacy Policy</li>
          <li>Your Account</li>
          <li>Advanced Search</li>
          <li>Term & Condition</li>
          <li>Contact Us</li>
        </ul>
        <ul  className='footer_desktop'>
          <li className='footer_title'>Account</li>
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Discount</li>
          <li>Custom Service</li>
          <li>Term & Condition</li>
        </ul>
        <ul>
          <li className='footer_title'>Newsletters</li>
          <li>Join 40.00+ Subscribers and get a new discount coupon</li>
          <div className='footer_input'>
            <input type="text" placeholder='Enter your email' />
            <button type="submit"><IoMdCheckmarkCircle /></button>
          </div>
          <div className='footer_social'>
          <IoLogoTwitter/>
          <TiSocialDribbble/>
          <TiSocialSkype />
          <TiSocialLinkedin />
          <FaFacebook />
           
        

          </div>
        </ul>

      </div>
      <div className='footer_end'>
        <p>© Copyright 2024 | Motosport By ShopiLaunch. Powered by Shopify.</p>
        <div className='footer_end_icons'>
        <SiMastercard />
        <SiVisa />
        <GrAmex />
        </div>
      </div>

    </footer>

  )
}
