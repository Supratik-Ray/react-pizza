import ButtonElement from "./ButtonELement";

function CartItem({ pizzaObj, count, onAddToCart, onRemoveFromCart }) {
  return (
    <li className="flex gap-6">
      <div className="h-25 w-25">
        <img
          src={pizzaObj.photoName}
          alt={pizzaObj.name}
          className="w-full h-full"
        />
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-bold">{pizzaObj.name}</p>
        <p>Quantity: {count}</p>
        <div className="space-x-4">
          <ButtonElement
            padding="px-3 py-1"
            onButtonClick={() => onAddToCart(pizzaObj.name)}
          >
            +
          </ButtonElement>
          <ButtonElement
            padding="px-3 py-1"
            onButtonClick={() => onRemoveFromCart(pizzaObj.name)}
          >
            -
          </ButtonElement>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
