import Card from "./utils/Card";

const Menu = () => {
  return (
    <section
      className="w-full h-full flex flex-col items-center justify-center gap-10 bg-zinc-950 py-10"
      id="menu"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-[#ff0019]">Menu</h2>
        <p className="text-zinc-300">Escolha o combo do tamanho da sua fome</p>
      </div>
      <div className="w-[1300px] flex flex-col items-center justify-center">
        <Card />
      </div>
    </section>
  );
};

export default Menu;
