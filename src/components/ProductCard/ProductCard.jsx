import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { BsCartPlus } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';


export default function ProductCard({
  product_name, 
  product_new_price,
   product_old_price, 
   product_image ,
   documentId , 
    inCart=false,
    inWishlist=false,
    quantity=1,
     onRemove,
    }) {
        const { user } = useAuth();
  const {addToCart} = useCart();
  const { addToWishlist } = useWishlist(); 
  const navigate = useNavigate();
  const toastcart = (name) => <span style={{ color: "green" }}>{toast(`${name} added to cart!`)}</span>;
  const toastwishlist = (name) => <span style={{ color: "green" }}>{toast(`${name} added to wishlist!`)}</span>;

  return (
<div className='productCard' onClick={() => {
    if (!inCart && !inWishlist && documentId) {
        navigate(documentId);
        setTimeout(() => {
            scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 0);
    }
   
}}>

        <div className='productCard_img'>
        <img src={`${product_image}`} onClick={() =>
        {
            if (inCart && documentId) {
                navigate(`/cart/${documentId}`, {replace: true});
                setTimeout(() => {
                    scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }, 0);
            }
            if (inWishlist && documentId) {
                navigate(`/wishlist/${documentId}`, {replace: true});
                setTimeout(() => {
                    scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }, 0);
            }
        }
        }/>
        {(!inCart && !inWishlist)? 
        <div className='productCard_icon'>
           {/* { (!user)?
           <BsCartPlus onClick={(e)=>{e.stopPropagation();
            addToCart({ product_name, product_new_price, documentId , product_image});
            }}/>
            <CiHeart onClick={(e) => {
                e.stopPropagation();
                addToWishlist({ product_name, product_new_price, documentId, product_image });
            }}/>
            : <BsCartPlus onClick={(e)=>{e.stopPropagation();
                addToCart({ product_name, product_new_price, documentId , product_image});
                toastcart(product_name);
                }}/>
            <CiHeart onClick={(e) => {
      e.stopPropagation();
      addToWishlist({ product_name, product_new_price, documentId, product_image });
      toastwishlist(product_name);
    }}/>
} */}
{
  (!user) ? (
    <>
      <BsCartPlus onClick={(e) => {
        e.stopPropagation();
        addToCart({ product_name, product_new_price, documentId, product_image });
      }} />
      <CiHeart onClick={(e) => {
        e.stopPropagation();
        addToWishlist({ product_name, product_new_price, documentId, product_image });
      }} />
    </>
  ) : (
    <>
      <BsCartPlus onClick={(e) => {
        e.stopPropagation();
        addToCart({ product_name, product_new_price, documentId, product_image });
        toastcart(product_name);
      }} />
      <CiHeart onClick={(e) => {
        e.stopPropagation();
        addToWishlist({ product_name, product_new_price, documentId, product_image });
        toastwishlist(product_name);
      }} />
    </>
  )
}
    

        </div>
:''
}
        </div>
        <div className='productCard_content'>
            <h6>{product_name}</h6>
            <div className='productCard_content_price'>
                <h6>${product_new_price}.00</h6>
                {product_old_price && <p>${product_old_price}.00</p>}
            </div>
            {inCart && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                    <div className="cart-controls">
                        {/* <button className='button decrease' onClick={onDecrease}>-</button> */}
                        <span className="quantity"><span>Quantity:</span><span>{quantity}</span></span>
                        {/* <button className='button increase' onClick={onIncrease}>+</button> */}
                        </div>
                        {/* <button onClick={onRemove} className="remove-btn">Remove</button> */}
                        <Button text={"Remove from cart"}onClick={onRemove}/>
                    </div>
                )}
                {inWishlist && (
                    <div style={{ display: "flex", flexDirection: "column",
                     gap: "1em"
                      }}>
                        <Button className="remove-btn" text={"Remove from wishlist"}onClick={onRemove}/>
                    </div>
                )}
                
            </div>
        </div>
    );
}