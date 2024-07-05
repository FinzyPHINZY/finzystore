import { FC, useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { ShoppingBag } from "lucide-react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header: FC = () => {
  const context = useContext(SidebarContext);

  if (context) {
    const [isActive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = context;
    const { itemCount } = useContext(CartContext);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      });
    });

    return (
      <header
        className={`${
          isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 transition-all`}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          {" "}
          <Link to={"/"}>
            <div className="">
              <img src={Logo} alt="" className="w-[40px]" />
            </div>
          </Link>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative "
          >
            <ShoppingBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemCount}
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
