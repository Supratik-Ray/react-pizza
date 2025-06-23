import Pizza from "./Pizza";
import pizzaData from "../pizzaData";

function Menu({ pizzasLeft, onAddToCart }) {
  return (
    <>
      <h2 className="text-center my-6 text-2xl text-amber-400 font-bold uppercase">
        Our Menu
      </h2>
      <ul className="grid grid-cols-2 gap-5 w-2/3 mx-auto mb-10">
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaObj={pizza}
            key={pizza.name}
            pizzasLeft={pizzasLeft[pizza.name]}
            onAddToCart={() => onAddToCart(pizza.name)}
          />
        ))}
      </ul>
    </>
  );
}

export default Menu;
