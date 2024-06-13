import FoodOne from "../../assets/prato1.webp";
import FoodTwo from "../../assets/prato2.webp";
import FoodThree from "../../assets/prato3.webp";
import FoodFour from "../../assets/prato4.webp";

import Button from "./Button";

import { useState } from "react";
import Modal from "./Modal";

const Card = () => {
  const listItem = [
    { 
      id: 1,
      img: FoodOne,
      title: "Combo 1",
      description:"12 peças: 3 Sashimi Salmão | 3 Niguiri Salmão | 3 trouxinhas de salmão | 3 Hossomaki Salmão", 
      price:16.90, 
      subPrice: null,
      star:"4.8"},
    { 
      id: 2,
      img: FoodTwo,
      title: "Combo 2",
      description:"32 peças: 5 Sashimi | 5 Niguiri | 5 Hossomaki | 5 Uramaki | 12 Hot", 
      price: 42.90, 
      subPrice: null,
      star:"5"},
    { 
      id: 3,
      img: FoodThree,
      title: "Combo 3",
      description:"60 peças: 8 Sashimi | 8 Niguiri | 10 Hossomaki | 10 Uramaki | 24 Hot" , 
      price:74.90, 
      subPrice: null,
      star:"4,9"},
    { 
      id: 4,
      img: FoodFour,
      title: "Combo 4",
      description:"84 peças: 11 Sashimi | 15 Niguiri | 15 Hossomaki | 15 Uramaki | 28 Hot" , 
      price: 99.90, 
      subPrice: null,
      star:"4,8"},
    
  ];
  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState("hidden");
  const [data, setData] = useState([])


  const add = (event) => {
    if (!open) {
      setOpen(!open);
      setVisibility("block");
      setData(event)
      console.log(data);

    } else {
      setOpen(!open);
      setVisibility("hidden");
    }
  };

  return (
    <>
      <Modal modalVisibility={visibility} click={add}>
        {listItem.map(item => item.id==data ?  
          
          <div key={item.id} className="flex flex-col">
            <img className="w-80 rounded-xl self-center" src={item.img} alt={item.title} />
              <h2 className="text-2xl font-semibold mt-4">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            <div className="flex items-end gap-2 my-4">
              <p className="font-bold text-3xl text-[#ff0019]">R${item.price}</p>
              <span className="italic line-through font-medium">{item.subPrice = (item.price * 0.2 + item.price).toFixed(2)}</span>
            </div>
            <Button title="Fazer pedido no Whatsapp" classGeral="flex-row-reverse hover:bg-opacity-70" icon="fa-brands fa-whatsapp font-bold"/>
          </div>
          
          : '')}
      </Modal>

      <div className="flex gap-10">
        {listItem.map((item) => (
          <button onClick={(event) => add(event.currentTarget.classList.value)} className={item.id} key={item.id}>
            <li className="newli w-72 h-80 shadow-sm cursor-pointer hover:bg-zinc-200 hover:scale-105 transition-all delay-75 shadow-zinc-600 rounded-lg flex flex-col items-center justify-center">
              <img
                className="newimg rounded-full w-52 shadow-zinc-600"
                src={item.img}
                alt={item.title}
              />
              <h3 className="text-xl text-zinc-950 font-semibold my-3">
                {item.title}
              </h3>
              <i className="fa-solid fa-star text-zinc-700 flex gap-2">{item.star}</i>
            </li>
          </button>
        ))}
      </div>
    </>
  );
};

export default Card;
