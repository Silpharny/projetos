import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../../services/firebaseConnection"

import { Swiper, SwiperSlide } from "swiper/react"

interface CarsProps {
  id: string
  name: string
  model: string
  year: string
  uid: string
  km: string
  price: string | number
  city: string
  owner: string
  whatsapp: string
  description: string
  created: Date
  images: CarImagesProps[]
}

interface CarImagesProps {
  name: string
  url: string
  uid: string
}

export function CarDetail() {
  const { id } = useParams()
  const [car, setCar] = useState<CarsProps>()
  const navigate = useNavigate()
  const [slidesPerView, setSlidesPerView] = useState<number>(2)

  useEffect(() => {
    async function loadCar() {
      if (!id) return

      const docRef = doc(db, "cars", id)
      await getDoc(docRef).then((doc) => {
        if (!doc.data()) {
          navigate("/")
        }

        setCar({
          id: doc.id,
          name: doc.data()?.name,
          model: doc.data()?.model,
          year: doc.data()?.year,
          uid: doc.data()?.uid,
          km: doc.data()?.km,
          price: doc.data()?.price,
          city: doc.data()?.city,
          owner: doc.data()?.owner,
          whatsapp: doc.data()?.whatsapp,
          images: doc.data()?.images,
          created: doc.data()?.created,
          description: doc.data()?.description,
        })
      })
    }
    loadCar()
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
      } else {
        setSlidesPerView(2)
      }
    }
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div>
      {car && (
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
        >
          {car?.images.map((image) => (
            <SwiperSlide key={image.name}>
              <img className="w-full h-96 object-cover" src={image.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {car && (
        <main className="w-full bg-white rounded-lg p-6 my-4">
          <div className="flex flex-col sm:flex-row mb-4 items-center justify-between">
            <h1 className="font-bold text-3xl text-black">{car?.name}</h1>
            <h1 className="font-bold text-3xl text-black">R${car?.price}</h1>
          </div>

          <div>
            <p>{car?.model}</p>
            <div className="flex w-full gap-6 my-4">
              <div className="flex flex-col gap-4">
                <div>
                  <p>Cidade</p>
                  <strong>{car?.city}</strong>
                </div>
                <div>
                  <p>Ano</p>
                  <strong>{car?.year}</strong>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p>Km</p>
                  <strong>{car?.km}</strong>
                </div>
              </div>
            </div>
          </div>

          <strong>Descrição</strong>
          <p className="mb-4">{car?.description}</p>

          <strong>Telefone / Whatsapp</strong>
          <p>{car?.whatsapp}</p>

          <a
            className="bg-green-500 w-full text-white flex items-center justify-center gap-2 my-6 h-11 text-xl rounded-lg font-medium cursor-pointer"
            href={`https://api.whatsapp.com/send?phone=55${car?.whatsapp}&text=Olá vi esse ${car?.name} no site WebCarros e fiquei interessado`}
            target="_blank"
          >
            Conversar com o vendedor
            <FaWhatsapp size={24} color="#fff" />
          </a>
        </main>
      )}
    </div>
  )
}
