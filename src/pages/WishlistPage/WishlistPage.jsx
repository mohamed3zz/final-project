import React, { useEffect } from 'react'
import { useWishlist } from '../../context/WishlistContext';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function WishlistPage() {
    useEffect (() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
                
            })
        }, 0);
        
    }, [])
    const { wishlist, removeFromWishlist } = useWishlist();
  return (
    <div className='WishlistPage'>
    <h2>WISHLIST</h2>
    {wishlist.length === 0 ? (
        <div className="emptyWishlist">
            <p>Wishlist is empty</p>
        </div>
    ) : (
        <div className="WishlistPage_container">
            {wishlist.map((item) => (
                <ProductCard
                    key={item.id}
                    documentId={item.id}
                    product_name={item.product_name}
                    product_new_price={item.product_new_price}
                    product_image={item.product_image}
                    onRemove={() => removeFromWishlist(item.id)}
                    inWishlist={true}
                />
            ))}
        </div>
    )}
</div>
  )
}
