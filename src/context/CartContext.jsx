// import { createContext, useContext, useState } from "react";



// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = (product) => {
//         console.log("Product Image URL:", product.product_image); // تحقق من قيمة الصورة
        
//         setCart((prevCart) => {
//             const existingItem = prevCart.find((item) => item.id === product.documentId);
//             if (existingItem) {
//                 return prevCart.map((item) =>
//                     item.id === product.documentId ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//             } else {
//                 return [...prevCart, { 
//                     ...product, 
//                     id: product.documentId, 
//                     quantity: 1, 
//                     product_name: product.product_name, 
//                     product_new_price: product.product_new_price, 
//                     product_image: product.product_image, // تعيين صورة افتراضية
//                 }];
//             }
//         });
//     };
    
    
    
//       function increaseQuantity(id) {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   }
      
//     const decreaseQuantity = (id) => {
//         setCart((prevCart) =>
//           prevCart
//             .map((item) =>
//               item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//             )
//             .filter((item) => item.quantity > 0)
//         );
//       };
//       const removeFromCart = (id) => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//       };
//     const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, totalItems }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // const addToCart = (product, user) => {
    //     if (!user) {
    //         alert("You must be logged in to add items to the cart.");
    //         return;
    //     }
    const addToCart = (product) => {
        if (!user) {
            alert("You must be logged in to add items to the cart.");
            return;
        }

    //     setCart((prevCart) => {
    //         const existingItem = prevCart.find((item) => item.id === product.documentId);
    //         if (existingItem) {
    //             return prevCart.map((item) =>
    //                 item.id === product.documentId ? { ...item, quantity: item.quantity + 1 } : item
    //             );
    //         } else {
    //             return [...prevCart, {
    //                 ...product,
    //                 id: product.documentId,
    //                 quantity: 1,
    //                 product_name: product.product_name,
    //                 product_new_price: product.product_new_price,
    //                 product_image: product.product_image,
    //             }];
    //         }
    //     });
    // };
    setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.documentId);
        if (existingItem) {
            return prevCart.map((item) =>
                item.id === product.documentId ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevCart, {
                ...product,
                id: product.documentId,
                quantity: 1,
                product_name: product.product_name,
                product_new_price: product.product_new_price,
                product_image: product.product_image,
            }];
        }
    });
};

    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, totalItems, increaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);