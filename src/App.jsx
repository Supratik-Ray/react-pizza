import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import pizzaData from "./pizzaData";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const openHour = 7;
  const closeHour = 23;
  const currentHour = new Date().getHours();

  const isOpen = currentHour >= openHour && currentHour < closeHour;
  console.log(currentHour);

  const [pizzasLeft, setPizzasLeft] = useState(
    Object.fromEntries(
      pizzaData.map((pizza) => [pizza.name, pizza.totalPizzas])
    )
  );

  const [cart, setcart] = useState({});

  function addToCart(pizzaName) {
    if (pizzasLeft[pizzaName] <= 0) return;
    setPizzasLeft((left) => ({
      ...left,
      [pizzaName]: left[pizzaName] - 1,
    }));

    setcart((cart) => ({
      ...cart,
      [pizzaName]: (cart[pizzaName] || 0) + 1,
    }));

    toast(` ${pizzaName} added to cart!`);
  }

  function removeFromCart(pizzaName) {
    setPizzasLeft((left) => ({
      ...left,
      [pizzaName]: left[pizzaName] + 1,
    }));

    setcart((cart) => {
      const updated = {
        ...cart,
        [pizzaName]: cart[pizzaName] - 1,
      };
      if (updated[pizzaName] === 0) delete updated[pizzaName];
      return updated;
    });

    toast(` ${pizzaName} removed from cart!`);
  }

  function orderPizzas() {
    setcart({});
    toast("Ordered Successfully! ✅", {
      position: "top-center",
    });
  }

  return (
    <div className="p-6 bg-amber-100 min-h-screen">
      <Header
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onAddToCart={addToCart}
        onOrderPizzas={orderPizzas}
      />
      {isOpen ? (
        <Menu pizzasLeft={pizzasLeft} onAddToCart={addToCart} />
      ) : (
        <div className="h-[600px] flex justify-center items-center ">
          <p className="text-xl text-gray-700 font-bold">
            We are currently closed!
          </p>
        </div>
      )}
      <Footer openHour={openHour} closeHour={closeHour} isOpen={isOpen} />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
