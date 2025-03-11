import React, { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/ProductCard/ProductCard"; 
import { NavLink } from "react-router-dom";

export default function ShoppingCartPage() {
      useEffect (() => {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    
                })
            }, 0);
            
        }, [])
    const { cart, removeFromCart } = useCart();
  
    console.log(cart);
    const totalPrice = cart.reduce((total, item) => {
        return total + item.product_new_price * item.quantity;
    }, 0);
    return (
        <div className="ShoppingCartPage">
            <h2> Shopping Cart</h2>
          
            <div className="ShoppingCartPage_container">
                {cart.map((item) => (
                    <ProductCard
                    documentId={item.id}
                        key={item.id}
                        product_name={item.product_name}
                        product_new_price={item.product_new_price}
                        product_image={item.product_image}
                        quantity={item.quantity}
                        onRemove={() => removeFromCart(item.id)}
                        inCart={true}

                    />
                ))}
            </div>
            {cart.length === 0 ?<div className="emptyCart">
            <p>Cart is empty</p>
            <NavLink to="/">Continue Shopping</NavLink>
            </div>
            :<div className="ShoppingCartPage_total">
            <h3>Total Price : <span className="totalPrice"> ${ totalPrice.toFixed(2)}</span></h3>
        </div>
}
        </div>
    );
}
