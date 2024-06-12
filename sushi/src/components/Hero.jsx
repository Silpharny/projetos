import HeroImg from "../assets/heroImg.svg";
import Button from "./utils/Button";
import CircleDashed from "./utils/CircleDashed";

const Hero = () => {
  return (
    <section
      className='w-full h-full flex flex-col items-center justify-center relative mt-16 p-24 z-0' id="home">
      <div className="w-[1300px] flex items-center justify-center before:absolute before:w-full before:h-full before:bg-cover before:bg-[url('src/assets/Background.svg')] before:brightness-50">
        <div className="w-[500px] flex flex-col gap-4 z-10 text-zinc-50">
          <h1 className="font-semibold text-3xl">
            Experimente o Melhor Sushi de Niterói em Sua Casa
          </h1>
          <p className="font-medium">
            Sabor autêntico, ingredientes frescos e entrega rápida. Peça agora e
            desfrute de uma experiência gastronômica única
          </p>
          <Button title="Fazer pedido " link="#contact" icon="fa-solid fa-arrow-right" />
        </div>
        <img className="w-[700px] brightness-90 bg" src={HeroImg} alt="Sushi" />
        <div>
          <CircleDashed />
        </div>
      </div>
    </section>
  );
};

export default Hero;
