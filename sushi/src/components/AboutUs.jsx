import AboutImg from '../assets/aboutImg.webp'

const AboutUs = () => {
  return (
    <section className="lg:max-w-[1200px] m-auto my-10 flex flex-col items-center pb-10 justify-center gap-10" id="about">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#ff0019]">Nossa história</h2>
      <div className="flex lg:flex-row w-80 lg:w-full flex-col gap-10 text-justify">
        <p className="font-medium">
          Nossa história começa no Japão, onde nossa família aperfeiçoou a arte
          de fazer sushi ao longo de gerações. Mantendo viva essa tradição,
          trouxemos nossos segredos culinários para você, sempre honrando os
          métodos ancestrais que garantem a autenticidade e a excelência de cada
          peça.
        </p>
        <p className="font-medium">
          Nosso delivery é mais que conveniência moderna; é a preservação de um
          legado familiar. Com ingredientes frescos e técnicas tradicionais,
          entregamos diretamente na sua casa o sabor autêntico do Japão,
          continuando a tradição e a paixão que nos guiam há décadas.
        </p>
      </div>
      <img className='rounded-md shadow-md shadow-zinc-500 hidden lg:block' src={AboutImg} alt="About Us" />
    </section>
  );
};

export default AboutUs;
