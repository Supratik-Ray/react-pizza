import pizzaData from "../pizzaData";
import CartItem from "./CartItem";
import ButtonElement from "./ButtonELement";
function Cart({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOrderPizzas,
  cartVisible,
  totalCartItems,
}) {
  let totalPrice = 0;

  if (!cartVisible) return null;

  return (
    <div className="absolute top-5 right-5 p-6 w-[300px] h-[500px] bg-amber-200 rounded">
      <h2 className="text-amber-800 font-bold text-xl uppercase mb-4 text-center">
        Cart
      </h2>
      {totalCartItems === 0 ? (
        <div className="h-4/5 flex justify-center items-center">
          <p className="text-amber-800">Cart is Empty!</p>
        </div>
      ) : (
        <>
          <ul className="space-y-4 h-[300px] overflow-auto hide-scrollbar">
            {Object.entries(cart).map(([pizzaName, count]) => {
              const pizzaObj = pizzaData.find(
                (pizza) => pizza.name === pizzaName
              );
              totalPrice += pizzaObj.price * count;
              return (
                <CartItem
                  pizzaObj={pizzaObj}
                  count={count}
                  onRemoveFromCart={onRemoveFromCart}
                  onAddToCart={onAddToCart}
                  key={pizzaName}
                />
              );
            })}
          </ul>
          <p className="my-4">
            Total Cost: <span className="font-bold">${totalPrice}</span>
          </p>
          <ButtonElement onButtonClick={onOrderPizzas}>Buy Now</ButtonElement>
        </>
      )}
    </div>
  );
}

export default Cart;
