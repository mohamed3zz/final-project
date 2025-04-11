import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.find((item) => item.id === product.documentId)) {
                return [...prevWishlist, { ...product, id: product.documentId }];
            }
            return prevWishlist;
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
