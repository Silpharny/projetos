import HeroImg from "../assets/heroImg.webp";
import Button from "./utils/Button";
import CircleDashed from "./utils/CircleDashed";

const Hero = () => {
  return (
    <section
      className='w-full h-full flex flex-col items-center justify-center lg:relative lg:p-2 z-0' id="home">
      <div className="lg:w-[1200px] w-80 h-full lg:text-left text-center flex items-center justify-center before:absolute before:w-full before:h-full before:bg-cover before:bg-[url('src/assets/Background.webp')] before:bg-center before:brightness-[.4]">
        <div className="w-[500px] flex flex-col gap-4 z-10 text-zinc-50">
          <h1 className="font-semibold text-3xl">
            Experimente o Melhor Sushi de Niterói em Sua Casa
          </h1>
          <p className="font-medium">
            Sabor autêntico, ingredientes frescos e entrega rápida. Peça agora e
            desfrute de uma experiência gastronômica única
          </p>
          <Button title="Fazer pedido " link="#menu" classGeral="lg:w-52" icon="fa-solid fa-arrow-right" />
        </div>
        <img className=" hidden lg:block lg:w-[700px] brightness-90 bg" src={HeroImg} alt="Sushi" />
        <div className="hidden lg:block lg:absolute">
          <CircleDashed />
        </div>
      </div>
    </section>
  );
};

export default Hero;
