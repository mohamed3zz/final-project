import React, { useEffect, useState } from 'react'

export default function FaqsPage() {
    useEffect (() => {
          setTimeout(() => {
              window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                  
              })
          }, 0);
          
      }, [])
    useEffect (() => {
        
        const questions = document.querySelectorAll('.question');
        const answer = document.querySelectorAll('.question .answer');
        questions.forEach((question , index) => {
            question.addEventListener('click' , () => {
                removeActiveAnswer();
                answer[index].classList.add('activeanswer');

            })
            answer[index].addEventListener('click' , () => {
                removeActiveAnswer();

            })

    }, [])
    const removeActiveAnswer = () => {
        const answer = document.querySelectorAll('.question .answer');

        answer.forEach((answer) => {
      answer.classList.remove('activeanswer');
        
        })
        
    
    }})
  return (
    <div className='FaqsPage'>
         <div className='faqsec1'>
            <h1>FAQs</h1>
          </div>
          <div className='faqsec2'>
            <h2>frequently asked questions</h2>
            <div className='questions_container'>
                <div className='question'>
                <p>How long does it take for home delivery?</p>
                <div className='answer'>
                <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>
                </div>
                </div>
                <div className='question'>
                <p>What courier do you use for deliveries?</p>
                <div className='answer'>
                <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method.</p>
                </div>

                </div>
                <div className='question'>
                <p>Why am I being charged for delivery on my order when it states standard delivery is free?</p>
                <div className='answer'>
                <p>All our delivery charges are pre-set by our courier company. We sell some oversized items which require a specialist courier company to fulfil the delivery, there is an additional charge for these. Also, our courier company consider some surcharge postcodes ‘Out of area’. There is an additional charge for these also. You can find a list of all [oversized items here] You can find a list of all</p>
                </div>

                </div>
                <div className='question'>
                <p>I haven’t received a dispatch email/email confirmation?</p>
                <div className='answer'>
                <p>Please be aware an automated email is sent to you to the given email address when your order is dispatched. Please check all folders including you junk as it will come from a noreply email address. To ensure emails reach you, add the domain eurocarparts.com to your safe senders list.</p>
                </div>

                </div>
                <div className='question'>
                <p>Why does it not tell us on the website that the parts will be delivered by the branch?</p>
                <div className='answer'>
                <p>Due to the delicacy of some parts we take extra care in the delivery of the item. These could include body panels and large bulky items. These are either available for collection from our branches or will be delivered to you through our branch network vehicles.</p>
                </div>

                </div>
                <div className='question'>
                <p>Can I collect from a local store?</p>
                <div className='answer'>
                <p>We offer a reserve and collect service. This is available on the checkout page. Please be aware, if the product is not available in a local store, you are unable to reserve it.</p>
                </div>

                </div>
                <div className='question'>
                <p>Do you deliver on Weekend?</p>
                <div className='answer'>
                <p>No, our courier company do not offer the service to deliver on weekends currently.</p>
                </div>

                </div>
                <div className='question'>
                <p>Can you confirm you have received my return?</p>
                <div className='answer'>
                <p>We aim to process returns within 5-7 working days of receiving them. You will be notified by email once the return is complete.We suggest you make a note of the shipping reference given when you sent the item back. This will allow you to track your parcel at every stage of delivery, including when we receive it.Should you have any queries about your return, please feel free to contact our Customer Service team via email</p>
                </div>

                </div>
                <div className='question'>
                <p>How long will it be before I get a refund?</p>
                <div className='answer'>
                <p>Once we receive your item(s) back, our returns department will inspect and restock the goods. Once our returns department have done this, an automated refund is generated on our system. Your outstanding refund is then processed by our accounts department back to your original payment method. This process typically takes 5-7 working days. When returning your products please remember to include your original invoice, without this it may delay your refund.</p>
                </div>

                </div>
                <div className='question'>
                <p>Who pays for return postage?</p>
                <div className='answer'>
                <p>If you are returning an unsuitable item for a refund we will refund the cost of the item only and not the original delivery cost.Should you be returning a faulty item for a refund we will refund both the original shipping costs and the return delivery costs.</p>
                </div>

                </div>
                <div className='question'>
                <p>Why have you not refunded the original delivery charge?</p>
                <div className='answer'>
                <p>If you are returning an unsuitable item for a refund we will refund the cost of the item only and not the original delivery cost. Should you be returning a faulty item for a refund we will refund both the original shipping costs and the return delivery costs.</p>
                </div>

                </div>
                <div className='question'>
                <p>Do you offer a VAT discount to non EU customers?</p>
                <div className='answer'>
                <p>Customer’s ordering from outside the European Union can contact us via telephone, live chat, or e-mail and quote the order reference number. Our customer services team will go through the process to remove the VAT off of their order.</p>
                </div>

                </div>
            </div>
            </div>
            <div className='faqsec3'>
            <div className='images_container'>

<img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram1.jpg?v=5499945389846879684" alt="" />
<img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram2.jpg?v=8106863877790995711" alt="" />
<img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram3.jpg?v=15286536461823850402" alt="" />
<img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram4.jpg?v=7532137303240174192" alt="" />
<img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram5.jpg?v=12499380915618350053" alt="" />
<img src="https://motosport-store-newdemo.myshopify.com/cdn/shop/files/instagram6.jpg?v=8000474941532265288" alt="" />
</div>

            </div>
      
    </div>
  )

}