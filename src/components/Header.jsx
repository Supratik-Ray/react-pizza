import { useState } from "react";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header({ cart, onRemoveFromCart, onAddToCart, onOrderPizzas }) {
  const [cartVisible, setCartVisible] = useState(false);
  const totalCartItems = Object.entries(cart).length;

  return (
    <header className="flex justify-between px-4 ">
      <div></div>
      <h1 className="text-4xl text-center uppercase font-bold text-amber-600 tracking-wider">
        -- React Pizzas --
      </h1>
      <div
        onMouseEnter={() => setCartVisible(true)}
        onMouseLeave={() => setCartVisible(false)}
        className="relative"
      >
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        <span className="absolute bg-red-500 text-white rounded-full w-5 h-5 p-3 flex justify-center items-center -top-3 -right-3">
          {totalCartItems}
        </span>
        <Cart
          cart={cart}
          onRemoveFromCart={onRemoveFromCart}
          onAddToCart={onAddToCart}
          cartVisible={cartVisible}
          onSetCartVisible={setCartVisible}
          totalCartItems={totalCartItems}
          onOrderPizzas={onOrderPizzas}
        />
      </div>
    </header>
  );
}

export default Header;
