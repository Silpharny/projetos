import FoodOne from "../../assets/prato1.svg";
import FoodTwo from "../../assets/prato2.svg";
import FoodThree from "../../assets/prato3.svg";
import FoodFour from "../../assets/prato4.svg";

import { useState } from "react";
import Modal from "./Modal";

const Card = (props) => {
  const listItem = [
    { id: 1, img: FoodOne, title: "Combo 1" },
    { id: 2, img: FoodTwo, title: "Combo 2" },
    { id: 3, img: FoodThree, title: "Combo 3" },
    { id: 4, img: FoodFour, title: "Combo 4" },
  ];

  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const [getValues, setGetValues] = useState({})

  const add = (id) => {
    if (!open) {
      setOpen(!open);
      setVisibility("block");
      setGetValues(id)
      //console.log(id);      
      console.log(getValues.getAttribute());
    } else {
      setOpen(!open);
      setVisibility("hidden");
    }

    
  };

  return (
    <>
      <Modal 
        modalVisibility={visibility} 
        click={add} 
        img={getValues}

      
      />
      
      <div className="flex gap-10">
        {listItem.map((item) => (
          <button onClick={(e) => add(e.target.closest(".clickAll"))} key={item.id}>
            <li className="clickAll w-72 h-80 shadow-sm cursor-pointer hover:bg-zinc-200 hover:scale-105 transition-all delay-75 shadow-zinc-600 rounded-lg flex flex-col items-center justify-center">
              <img
                className="rounded-full w-52 shadow-zinc-600"
                src={item.img}
                alt={item.id}
              />
              <h3 className="text-xl text-zinc-950 font-semibold my-3">
                {item.title}
              </h3>
              <i className="fa-solid fa-star text-zinc-700 flex gap-2">4,9</i>
            </li>
          </button>
        ))}
      </div>
    </>
  );
};

export default Card;
