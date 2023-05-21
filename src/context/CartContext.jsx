import { useState, createContext } from "react";

export const CartContext = createContext({ cart:[] })

export const CartProvider = ({children})=>{
    
    const [cart, setCart] = useState([])
    
    console.log(cart)

    const addToCart = (item, cantidad)=>{
        if(!isInCart(item.id)){
            setCart(prev =>[...prev, {item, cantidad}])
        }else{
            console.log("producto ya agregado!")
        }
    };

    const isInCart = (id)=>{
        return cart.some((prod) => prod.item.id === id)
    }

    const deleteProd = (id)=>{
        const cartFilter = cart.filter (prod => prod.id !== id);
        setCart(cartFilter);
    };


    const clearCart = ()=>{
        setCart([]);
    }


    return(
        <CartContext.Provider value={{cart, addToCart, deleteProd, clearCart}}>
            {children}
        </CartContext.Provider>
    )
};



