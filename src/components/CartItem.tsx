import { FC, useContext } from "react";
import type { Product } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import { CartContext } from "../contexts/CartContext";

interface CartItemProps {
  item: Product;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[80px]" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/$id`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer">
              <X
                className="text-gray-500 hover:text-red-500 transition"
                onClick={() => removeFromCart(id)}
              />
            </div>
          </div>

          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                className="flex-1 flex justify-center items-center cursor-pointer  h-full"
                onClick={() => decreaseAmount(id)}
              >
                <Minus />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={() => increaseAmount(id)}
              >
                <Plus />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              $ {parseFloat((price * amount!).toString()).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
