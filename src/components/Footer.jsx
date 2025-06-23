function Footer({ openHour, closeHour, isOpen }) {
  return (
    <footer className=" bg-amber-300 fixed w-full left-0 py-2  bottom-0 ">
      <p className="text-amber-800 text-center font-bold">
        {isOpen
          ? `Order our tasty pizzas! we are open until ${closeHour}:00`
          : `we are currently closed! Please visit us between ${openHour}:00 and ${closeHour}:00`}
      </p>
    </footer>
  );
}

export default Footer;
