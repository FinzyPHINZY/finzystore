import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Product } from "./ProductContext";

export const CartContext = createContext<any>(null);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[] | []>([]);
  const [itemCount, setItemCount] = useState<number>(0);

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const total = cart.reduce((acc, cur) => {
      return acc + cur.price * cur.amount!;
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    const amount = cart.reduce((acc, cur) => acc + cur.amount!, 0);
    setItemCount(amount);
  }, [cart]);

  const addToCart = (id: number, product: Product) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount! + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id: number) => {
    const item = cart.find((item) => item.id === id);
    addToCart(id, item!);
  };

  const decreaseAmount = (id: number) => {
    const item = cart.find((item) => item.id === id);

    if (item) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: Math.max(item.amount! - 1),
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (item?.amount! < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
