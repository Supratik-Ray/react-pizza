function PizzaImage({ pizzaObj, soldOut }) {
  return (
    <div className="overflow-hidden h-48 w-48 bg-gray-100  flex-shrink-0 ">
      <img
        src={pizzaObj.photoName}
        alt={pizzaObj.name}
        className={`object-cover w-full h-full rounded transition-transform duration-300 group-hover:scale-110 ${
          soldOut ? "grayscale" : ""
        }`}
      />
    </div>
  );
}

export default PizzaImage;
