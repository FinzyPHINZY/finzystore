import { FC, useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { ShoppingBag } from "lucide-react";

const Header: FC = () => {
  const context = useContext(SidebarContext);

  if (context) {
    const { isOpen, setIsOpen } = context;

    return (
      <header className="bg-pink-200">
        <div>Header</div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <ShoppingBag className="text-2xl" />
        </div>
      </header>
    );
  }
};

export default Header;
