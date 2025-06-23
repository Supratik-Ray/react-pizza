function PizzaDetails({ soldOut, pizzaObj }) {
  return (
    <>
      <h3 className="text-gray-800 font-bold text-lg">{pizzaObj.name}</h3>
      <p className="text-gray-600">{pizzaObj.ingredients}</p>
      <p className={`${soldOut ? "text-red-600" : ""} text-lg`}>
        ${pizzaObj.price}
      </p>
    </>
  );
}

export default PizzaDetails;
