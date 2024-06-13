import Card from '../components/utils/Card'

const Menu = () => {

  return (
    <section
      className=" flex flex-col items-center justify-center gap-10 bg-zinc-50 py-10"
      id="menu"
    > 
      <div className="flex flex-col items-center justify-center">
        <h2 className="lg:text-4xl text-3xl font-bold text-[#ff0019]">Menu</h2>
        <p className="text-zinc-700">Escolha o combo do tamanho da sua fome</p>
      </div>
      <div className=" w-full flex flex-col items-center justify-center">
        <Card />
      </div>
      

    </section>
  );
};

export default Menu;
