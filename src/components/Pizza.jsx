import PizzaImage from "./PizzaImage";
import PizzaDetails from "./PizzaDetails";
import PizzaActions from "./PizzaActions";

function Pizza({ pizzaObj, pizzasLeft, onAddToCart }) {
  const soldOut = pizzasLeft <= 0;

  return (
    <li className="flex  gap-5 border border-amber-200 shadow p-4 rounded transition duration-300  hover:shadow-lg group">
      <PizzaImage soldOut={soldOut} pizzaObj={pizzaObj} />
      <div className="space-y-4 w-1/2">
        <PizzaDetails soldOut={soldOut} pizzaObj={pizzaObj} />
        <PizzaActions
          onAddToCart={onAddToCart}
          soldOut={soldOut}
          pizzasLeft={pizzasLeft}
        />
      </div>
    </li>
  );
}

export default Pizza;
