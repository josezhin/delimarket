import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCard] = useState([]);
  const addToCard = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCard(newCart);
    }

    setCard((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => {
    setCard((prevState) => prevState.filter((item) => item.id !== product.id));
  };
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  });

  const calculateTotal = () => {
    const totalPrice = cart.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);

    setTotal(totalPrice);
  };

  return (
    <CartContext.Provider value={{ cart, addToCard, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
