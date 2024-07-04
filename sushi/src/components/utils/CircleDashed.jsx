const CircleDashed = () => {
  const circles = [
    { id: 1, title: "Frete Grátis", position: "right-[-550px] top-[-40px]" },
    { id: 2, title: "Faça seu pedido", position: "right-[-500px] top-[190px]" },
    { id: 4, title: "Nosso Queridinho", position: "right-[-270px] top-[170px]" },
    { id: 3, title: "Promoção Limitada", position: "right-[-200px] top-[-330px]" },
  ];

  return (
    <>
      {circles.map((item) => (
        <span
          key={item.id}
          className={
            item.position +
            " relative text-center rounded-full border-2 border-dashed opacity-50 border-[#ff0019]  w-28 h-28 flex justify-center items-center text-zinc-50"
          }
        >
          {item.title}
        </span>
      ))}
    </>
  );
};

export default CircleDashed;
