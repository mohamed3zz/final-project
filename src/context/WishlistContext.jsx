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
// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useAuth } from "./AuthContext";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const {user} = useAuth();
//   const wishlistKey = user ? `wishlist_${user.id}` : "wishlist";
//   // استرجاع الـ wishlist من localStorage عند تحميل التطبيق
//   const [wishlist, setWishlist] = useState(() => {
//     const storedWishlist = localStorage.getItem(wishlistKey);
//     return storedWishlist ? JSON.parse(storedWishlist) : [];
//   });

//   // عند تغير الـ wishlist، نخزنه في localStorage
//   useEffect(() => {
//     localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
//   }, [wishlist, wishlistKey]);

//   const addToWishlist = (product) => {
//     setWishlist((prevWishlist) => {
//       // تأكد من عدم تكرار المنتج
//       if (!prevWishlist.find((item) => item.id === product.documentId)) {
//         return [...prevWishlist, { ...product, id: product.documentId }];
//       }
//       return prevWishlist;
//     });
//   };

//   const removeFromWishlist = (id) => {
//     setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);