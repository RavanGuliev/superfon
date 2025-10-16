import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getInitialCart = () => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  };

  const getInitialFavorites = () => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  };

  const [cartItems, setCartItems] = useState(getInitialCart);
  const [favorites, setFavorites] = useState(getInitialFavorites);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const exists = prevItems.find(i => i.id === item.id);
      if (exists) {
        return prevItems.map(i =>
          i.id === item.id
            ? {
                ...i,
                quantity: Math.min(i.quantity + (item.quantity || 1), 10),
                totalPrice: Math.min(i.quantity + (item.quantity || 1), 10) * i.price
              }
            : i
        );
      } else {
        return [
          ...prevItems,
          { ...item, quantity: item.quantity || 1, totalPrice: (item.quantity || 1) * item.price }
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, quantity: Math.min(i.quantity + 1, 10), totalPrice: Math.min(i.quantity + 1, 10) * i.price }
          : i
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, quantity: Math.max(i.quantity - 1, 1), totalPrice: Math.max(i.quantity - 1, 1) * i.price }
          : i
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + (item.totalPrice || item.price * item.quantity), 0);

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.filter(i => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };
  const favoritesTotal = favorites.reduce((sum, item) => sum + (item.price || 0), 0);


  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      total,
      favorites,
      toggleFavorite,
      favoritesTotal,
      isFavorite
    }}>
      {children}
    </CartContext.Provider>
  );
};
