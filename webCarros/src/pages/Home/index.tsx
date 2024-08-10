export function Home() {
  return (
    <>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          type="text"
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 rounded-lg h-9 px-8 text-white font-medium text-lg">
          Pesquisar
        </button>
      </section>

      <h1 className="text-2xl font-bold text-center text-black mt-6 mb-4">
        Carros novos e usados em todo Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://www.webmotors.com.br/wp-content/uploads/2024/08/09145246/FESTIVAL-INTERLAGOS-CARROS-8909.webp"
            alt="Carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">BMW 320i</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              anAno 2016/2016 | 23.000 km{" "}
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 190.000
            </strong>
          </div>
          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-black">Campo Grande - MS</span>
          </div>
        </section>
      </main>
    </>
  )
}
