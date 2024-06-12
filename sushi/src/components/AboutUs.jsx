import AboutImg from '../assets/aboutImg.svg'

const AboutUs = () => {
  return (
    <section className="w-[1300px] my-10 flex flex-col items-center justify-center gap-10" id="about">
      <h2 className="text-4xl font-bold text-[#ff0019]">Nossa história</h2>
      <div className="flex gap-10 text-justify">
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
      <img className='w-full rounded-md shadow-md shadow-zinc-500' src={AboutImg} alt="About Us" />
    </section>
  );
};

export default AboutUs;
