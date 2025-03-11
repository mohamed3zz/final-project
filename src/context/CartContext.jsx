import { createContext, useContext, useState } from "react";



const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log("Product Image URL:", product.product_image); // تحقق من قيمة الصورة
        
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
                    product_image: product.product_image, // تعيين صورة افتراضية
                }];
            }
        });
    };
    
    
    
      function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
      
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
        <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useAuth } from "./AuthContext";


// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const {user} = useAuth();
//   const cartKey = user ? `cart_${user.id}` : "cart";
//   // استرجاع بيانات السلة من localStorage إذا كانت موجودة
//   const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem(cartKey);
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   // عند تغيير السلة، نخزنها في localStorage
//   useEffect(() => {
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//   }, [cart, cartKey]);

//   const addToCart = (product) => {
//     console.log("Product Image URL:", product.product_image); // التحقق من قيمة الصورة
//     setCart((prevCart) => {
//       // البحث عن المنتج باستخدام documentId (اللي بتستخدمه كـ id)
//       const existingItem = prevCart.find((item) => item.id === product.documentId);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.documentId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [
//           ...prevCart,
//           {
//             ...product,
//             id: product.documentId, // استخدام documentId كمعرف للمنتج في السلة
//             quantity: 1,
//             product_name: product.product_name,
//             product_new_price: product.product_new_price,
//             product_image: product.product_image, // إذا كانت غير موجودة ممكن تضيف صورة افتراضية هنا
//           },
//         ];
//       }
//     });
//   };

//   const increaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, totalItems }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);