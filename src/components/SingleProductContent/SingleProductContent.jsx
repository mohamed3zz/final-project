
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import Button from '../Button/Button';
import { useCart } from '../../context/CartContext';
// import { addimagetocart } from '../SingleProductImage/SingleProductImage';

export default function SingleProductContent({ product_name, product_new_price, product_old_price, prouct_discription, documentId , product_image }) {
    console.log(product_image);
    
    const { addToCart, decreaseQuantity, removeFromCart, cart } = useCart();
    const itemInCart = cart.find((item) => item.id === documentId);
    const quantity = itemInCart ? itemInCart.quantity : 0;

    const [messageadded, setMessageadded] = useState("");
    const [messagedeleted, setMessagedeleted] = useState("");

    const handleAddToCart = () => {
        
        addToCart({ product_name, product_new_price, documentId , product_image});
        setMessageadded(`${product_name} added to cart!`);
        setTimeout(() => setMessageadded(""), 4000);
        // addimagetocart({product_image});
    };

    const IncreaseQuantity = () => {
        addToCart({ product_name, product_new_price, documentId , product_image });
        
    };

    const DecreaseQuantity = () => {
        if (quantity > 1) {
            decreaseQuantity(documentId);
        } else {
            removeFromCart(documentId); 
        }
    };

    const RemoveFromCart = () => {
        removeFromCart(documentId);
        setMessagedeleted(`${product_name} removed from cart!`);
        setTimeout(() => setMessagedeleted(""), 4000);
    };

    return (
        <div className='singleProduct_content'>
            <h4>{product_name}</h4>
            {/* <img src={`${product_image}`} alt="" /> */}
            <div className='SingleProduct_Content_Rate'>
                <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                <p>No reviews</p>
            </div>
            <div className='singleProduct_content_price'>
                <h6>${product_new_price}.00</h6>
                <p>${product_old_price}.00</p>
            </div>
            <div className='singleProduct_content_description'>
                <p>{prouct_discription}</p>
            </div>

            { quantity === 0 ? 
                <div className='addtocartbox' style={{display:"flex", flexDirection:"column", textAlign:"center", alignItems:"center", justifyContent:"center", width:"100%" }}>
                    <Button text={"Add to cart"} className='addtocart' onClick={handleAddToCart} style={{width:"80%"}} />
                    {messagedeleted && <p style={{ color: "red", fontSize:"1.2em", fontWeight:"400", marginTop:"1em" }}>{messagedeleted}</p>}
                </div>
            : 
            <div style={{display:"flex", flexDirection:"column", textAlign:"center" }}>
                <div className='addtocartbox' style={{display:"flex", alignItems:"center" }}>
                    <div className='addtocartup'>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" , gap:"2.5em"}}>
                        <button className='button button-' onClick={DecreaseQuantity} style={{ borderRight:"1px solid #000"}}>-</button>
                        <span>{quantity}</span>
                        <button className='button button+' onClick={IncreaseQuantity} style={{borderLeft:"1px solid #000"}}>+</button>
                        </div>
                    </div>
                    
                    <Button className='removefromcart' text={"Remove from cart"} onClick={RemoveFromCart} />
                    </div>
                    {messageadded && <p style={{ color: "green", fontSize:"1.2em", fontWeight:"400", marginTop:"1em" }}>{messageadded}</p>}
                
                </div>
            }
        </div>
    );
}
