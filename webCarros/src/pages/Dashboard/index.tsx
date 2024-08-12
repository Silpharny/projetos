import { FiTrash2 } from "react-icons/fi"
import { DashboardHeader } from "../../components/panelHeader"
import { useContext, useEffect, useState } from "react"
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore"
import { db, storage } from "../../services/firebaseConnection"
import { AuthContext } from "../../contexts/authContext"
import { deleteObject, ref } from "firebase/storage"

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

export function Dashboard() {
  const [cars, setCars] = useState<CarsProps[]>([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (!user?.uid) {
      return
    }

    const carsRef = collection(db, "cars")

    const q = query(carsRef, where("uid", "==", user.uid))

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
  }, [user])

  async function handleDeleteCar(car: CarsProps) {
    const itemCar = car

    const docRef = doc(db, "cars", itemCar.id)
    await deleteDoc(docRef)

    itemCar.images.map(async (image) => {
      const imagePath = `images/${image.uid}/${image.name}`

      try {
        await deleteObject(ref(storage, imagePath))
        setCars(cars.filter((car) => car.id !== itemCar.id))
      } catch (error) {
        console.error(error)
      }
    })
  }

  return (
    <>
      <DashboardHeader />
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <section className="w-full bg-white rounded-lg relative" key={car.id}>
            <button
              onClick={() => handleDeleteCar(car)}
              className="absolute top-2 right-2 bg-white w-14 h-14 rounded-full flex items-center justify-center drop-shadow-sm"
            >
              <FiTrash2 size={26} color="#000" />
            </button>
            <img
              className="w-full rounded-lg mb-2 max-h-70"
              src={car.images[0].url}
            />
            <p className="font-bold mt-1 px-2 mb-2">{car.name}</p>

            <div className="flex flex-col px-2">
              <span className="text-zinc-700 ">
                Ano {car.year} | {car.km} km{" "}
              </span>
              <strong className="text-black font-bold mt-4">
                R$ {car.price}
              </strong>
            </div>
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <div className="px-2 pb-2">
              <span className="text-black">{car.city}</span>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}
