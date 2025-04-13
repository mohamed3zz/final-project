import React, { useEffect } from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Form, Formik } from 'formik';
import RegisterInput from '../../components/RegisterInput/RegisterInput';
import Button from '../../components/Button/Button';
export default function ContactUsPage() {
    useEffect (() => {
          setTimeout(() => {
              window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                  
              })
          }, 0);
          
      }, [])
    const handleSubmit = (values, { resetForm }) => {
        console.log("Contact Form Values:", values);
        resetForm();
      };
  return (
    <div className='ContactUsPage'>
         {/* <h1>CONTACT US</h1> */}
         <div className='contactsec1'>
            <h1>CONTACT US</h1>
          </div>
          <div className='contactsec2'>
            <div className='contactsec2_content'>
                <div className='container1'>
                <div className='contactsec2_content_title'>
                    <h3>CONTACT INFORMATION</h3>
                </div>
                <div className='contactsec2_content_paragraph'>
                    <p>We do not sell product from our corporate headquarters in New York City. If you want to visit, please reach out to our customer service team first.</p>
                    <p>1201 Broadway
                    Suite 600
                    </p>
                </div>
                </div>
                <div className='container2'>
                    <h2>hello@domain.com</h2>
                </div>
                <div className='container3'>
                    <h6>FOLLOW US</h6>
                    <div className='contacticons'>
                    <BsTwitterX />
                    <IoLogoInstagram />
                    <FaFacebookF />
                    <FaYoutube />
                    </div>

                </div>

            </div>
            <div className='contactsec2_img'>
                <img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/map.jpg?v=1721376472&width=900" alt="" />

            </div>

          </div>
          <div className='contactsec3'>
            <div className='ContactForm'>

            <h2>Contact Form</h2>
          <div data-aos="fade-down">
            <Formik
  initialValues={{ name: "", email: "", message: "" }}
  onSubmit={(values, { resetForm }) => {
    console.log("Contact Form Values:", values);
    resetForm();
  }}
>
  {({ handleChange, values }) => (
    <Form>
      <div className='contactformup'>
        <RegisterInput name="name" header="Name" placeholder="Enter your name" />
        <RegisterInput name="email" header="Email" placeholder="Enter your email" />
      </div>
      <div className='contactformdown'>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          value={values.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <Button text="Submit" type="submit" />
    </Form>
  )}
</Formik>
            </div>
          </div>
      </div>
    </div>
  )
}
