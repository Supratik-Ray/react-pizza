import ButtonElement from "./ButtonELement";
function PizzaActions({ soldOut, onAddToCart, pizzasLeft }) {
  return (
    <div className="space-x-6">
      <ButtonElement disabled={soldOut} onButtonClick={onAddToCart}>
        {soldOut ? "SOLD OUT" : "Add to cart"}
      </ButtonElement>
      <span className="text-sm text-red-700 font-semibold">
        {pizzasLeft} pizzas left
      </span>
    </div>
  );
}

export default PizzaActions;
