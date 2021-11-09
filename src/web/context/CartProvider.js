import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext({
  cart: localStorage.getItem('cart'), // store the cart details
  updateCart: () => {}, // update the cart details
});

const CartProvider = ({ children }) => {
  const session = useContext(CartContext);
  const [_cart, setCart] = useState(session);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, [session]);

  return (
    <CartContext.Provider
      value={{
        cart: JSON.parse(localStorage.getItem('cart')),
        updateCart: setCart,
      }}
    >{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
