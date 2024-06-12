import Button from "./utils/Button"

const Contact = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center" id="contact">
        <div className="max-w-[1300px] shadow-lg p-10 flex items-center gap-32 justify-center my-16">   
            <h3 className="text-4xl font-bold text-zinc-900 flex flex-col">
                Faça seu pedido
                <span className="text-sm font-semibold text-zinc-500">Faça seu pedido agora e ganhe 25% de desconto</span>
            </h3>
            <Button title="Whatsapp" classGeral="flex-row-reverse" icon="fa-brands fa-whatsapp font-bold"/>
        </div>
    </section>
  )
}

export default Contact