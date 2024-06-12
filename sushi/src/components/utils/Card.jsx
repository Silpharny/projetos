import FoodOne from "../../assets/prato1.svg";
import FoodTwo from "../../assets/prato2.svg";
import FoodThree from "../../assets/prato3.svg";
import FoodFour from "../../assets/prato4.svg";

const Card = () => {
  const listItem = [
    { id: 1, img: FoodOne, title: "Combo 1" },
    { id: 2, img: FoodTwo, title: "Combo 2" },
    { id: 3, img: FoodThree, title: "Combo 3" },
    { id: 4, img: FoodFour, title: "Combo 4" },
  ];

  return (
    <ul className="flex gap-10">
      {listItem.map((item) => (
        <li key={item.id} className="w-72 h-80 shadow-sm hover:bg-zinc-900 hover:scale-105 transition-all delay-75 shadow-zinc-600 rounded-lg flex flex-col items-center justify-center">
          <img
            className="rounded-full w-52 shadow-zinc-600"
            src={item.img}
            alt={item.title}
          />
          <h3 className="text-xl text-zinc-50 font-semibold my-3">
            {item.title}
          </h3>
          <i className="fa-solid fa-star text-zinc-50 flex gap-2">4,9</i>
        </li>
      ))}
    </ul>
  );
};

export default Card;
