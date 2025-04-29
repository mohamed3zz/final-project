// import { createContext, useContext, useState } from "react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//     const [wishlist, setWishlist] = useState([]);

//     const addToWishlist = (product) => {
//         setWishlist((prevWishlist) => {
//             if (!prevWishlist.find((item) => item.id === product.documentId)) {
//                 return [...prevWishlist, { ...product, id: product.documentId }];
//             }
//             return prevWishlist;
//         });
//     };

//     const removeFromWishlist = (id) => {
//         setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
//     };

//     return (
//         <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// };

// export const useWishlist = () => useContext(WishlistContext);
import { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        if (!user) {
            alert("You must be logged in to add items to the wishlist.");
            return;
        }

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
