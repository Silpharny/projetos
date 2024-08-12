import { useState, useEffect } from "react"
import { collection, query, getDocs, orderBy, where } from "firebase/firestore"
import { db } from "../../services/firebaseConnection"
import { Link } from "react-router-dom"

interface CarsProps {
  id: string
  name: string
  model: string
  year: string
  uid: string
  km: string
  price: string | number
  city: string

  images: CarImagesProps[]
}

interface CarImagesProps {
  name: string
  url: string
  uid: string
}

export function Home() {
  const [cars, setCars] = useState<CarsProps[]>([])
  const [loadImages, setLoadImages] = useState<string[]>([])

  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    loadCars()
  }, [])

  function loadCars() {
    const carsRef = collection(db, "cars")
    const q = query(carsRef, orderBy("created", "desc"))

    getDocs(q).then((snapshot) => {
      const listCars = [] as CarsProps[]

      snapshot.forEach((doc) => {
        listCars.push({
          id: doc.id,
          name: doc.data().name,
          model: doc.data().model,
          year: doc.data().year,
          uid: doc.data().uid,
          km: doc.data().km,
          price: doc.data().price,
          city: doc.data().city,
          images: doc.data().images,
        })
      })
      setCars(listCars)
    })
  }

  function handleImageLoad(id: string) {
    setLoadImages((prevImages) => [...prevImages, id])
  }

  async function handleSearchCar() {
    if (!searchTerm) {
      loadCars()
      return
    }

    setCars([])
    setLoadImages([])

    const q = query(
      collection(db, "cars"),
      where("name", ">=", searchTerm.toUpperCase()),
      where("name", "<=", searchTerm.toUpperCase() + "\uf8ff")
    )

    const querySnapshot = await getDocs(q)

    const listCars = [] as CarsProps[]

    querySnapshot.forEach((doc) => {
      listCars.push({
        id: doc.id,
        name: doc.data().name,
        model: doc.data().model,
        year: doc.data().year,
        uid: doc.data().uid,
        km: doc.data().km,
        price: doc.data().price,
        city: doc.data().city,
        images: doc.data().images,
      })
    })
    setCars(listCars)
  }

  return (
    <>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          type="text"
          placeholder="Digite o nome do carro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-red-500 rounded-lg h-9 px-8 text-white font-medium text-lg"
          onClick={handleSearchCar}
        >
          Pesquisar
        </button>
      </section>

      <h1 className="text-2xl font-bold text-center text-black mt-6 mb-4">
        Carros novos e usados em todo Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Link to={`/car/${car.id}`} key={car.id}>
            <section className="w-full bg-white rounded-lg">
              <div
                className="w-full h-72 rounded-lg bg-slate-200"
                style={{
                  display: loadImages.includes(car.id) ? "none" : "block",
                }}
              ></div>
              <img
                className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
                src={car.images[0].url}
                alt="Carro"
                onLoad={() => handleImageLoad(car.id)}
                style={{
                  display: loadImages.includes(car.id) ? "block" : "none",
                }}
              />
              <p className="font-bold mt-1 mb-2 px-2">{car.name}</p>
              <div className="flex flex-col px-2">
                <span className="text-zinc-700 mb-6">
                  Ano {car.year} | {car.km} km
                </span>
                <strong className="text-black font-medium text-xl">
                  R$ {car.price}
                </strong>
              </div>
              <div className="w-full h-px bg-slate-200 my-2"></div>
              <div className="px-2 pb-2">
                <span className="text-black">{car.city}</span>
              </div>
            </section>
          </Link>
        ))}
      </main>
    </>
  )
}
