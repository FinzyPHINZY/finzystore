import { ArrowBigRight, Trash2 } from "lucide-react";
import { FC, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Product } from "../contexts/ProductContext";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  const sidebarContext = useContext(SidebarContext);
  if (!sidebarContext) {
    return null;
  }
  const { isOpen, handleClose } = sidebarContext;

  const { cart, clearCart, total, itemCount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemCount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <ArrowBigRight className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item: Product) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            className="cursor-pointer py-4 bg-red-500 text-white h-12 w-12 flex justify-center items-center text-xl"
            onClick={() => clearCart()}
          >
            <Trash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>

        <Link
          to="/"
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
