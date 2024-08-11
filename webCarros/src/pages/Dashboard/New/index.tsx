import { ChangeEvent, useContext, useState } from "react"
import { DashboardHeader } from "../../../components/panelHeader"

import { FiTrash, FiUpload } from "react-icons/fi"

import { useForm } from "react-hook-form"
import { Input } from "../../../components/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthContext } from "../../../contexts/authContext"
import { v4 as uuidV4 } from "uuid"
import { storage } from "../../../services/firebaseConnection"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage"

const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  model: z.string().nonempty("O campo modelo é obrigatório"),

  year: z
    .string()
    .nonempty("O campo ano é obrigatório")
    .min(4, "O campo ano deve ter pelo menos 4 caracteres"),
  km: z.string().nonempty("O campo km é obrigatório"),
  price: z.string().nonempty("O campo preço é obrigatório"),
  city: z.string().nonempty("O campo cidade é obrigatório"),
  whatsapp: z
    .string()
    .nonempty("O campo Whatsapp é obrigatório")
    .min(1, "O campo Whatsapp é obrigatório")
    .refine((value) => /^(\d{11,12})$/.test(value), {
      message: "Número de telefone inválido",
    }),

  description: z.string().nonempty("O campo descrição é obrigatório"),
})

type FormData = z.infer<typeof schema>

interface ImageItemProps {
  uid: string
  name: string
  previewUrl: string
  url: string
}

export function New() {
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  const [carImages, setCarImages] = useState<ImageItemProps[]>([])

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0]

      if (image.type === "image/jpeg" || image.type === "image/png") {
        await handleUpload(image)
      } else {
        alert("Formato inválido")
        return
      }
    }
  }

  async function handleUpload(image: File) {
    if (!user?.uid) {
      return
    }

    const currentId = user?.uid
    const uidImage = uuidV4()

    const uploadRef = ref(storage, `images/${currentId}/${uidImage}`)

    uploadBytes(uploadRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const newImage = {
          name: uidImage,
          uid: currentId,
          previewUrl: URL.createObjectURL(image),
          url: url,
        }

        setCarImages((images) => [...images, newImage])
      })
    })
  }

  function onSubmit(data: FormData) {
    console.log(data)
  }

  async function handleDeleteImage(image: ImageItemProps) {
    const imagePath = `images/${image.uid}/${image.name}`

    const imageRef = ref(storage, imagePath)

    try {
      await deleteObject(imageRef)
      setCarImages(carImages.filter((i) => i.url !== image.url))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <DashboardHeader />

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
        <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32 md:w-48">
          <div className="absolute cursor-pointer">
            <FiUpload size={30} color="#000" />
          </div>
          <div className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="opacity-0 cursor-pointer"
              onChange={handleFile}
            />
          </div>
        </button>
        {carImages.map((image) => (
          <div
            key={image.uid}
            className="w-full h-32 flex items-center justify-center relative"
          >
            <button
              className="absolute cursor-pointer"
              onClick={() => handleDeleteImage(image)}
            >
              <FiTrash size={30} color="#fff" />
            </button>
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <p className="mb-2 font-medium">Nome</p>
            <Input
              type="text"
              register={register}
              name="name"
              error={errors.name?.message}
              placeholder="Nome do veículo"
            />
          </div>
          <div className="mb-3">
            <p className="mb-2 font-medium">Modelo</p>
            <Input
              type="text"
              register={register}
              name="model"
              error={errors.model?.message}
              placeholder="Modelo do veículo"
            />
          </div>
          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div>
              <p className="mb-2 font-medium">Ano</p>
              <Input
                type="text"
                register={register}
                name="year"
                error={errors.year?.message}
                placeholder="Ano do carro"
              />
            </div>
            <div>
              <p className="mb-2 font-medium">Km rodados</p>
              <Input
                type="text"
                register={register}
                name="km"
                error={errors.km?.message}
                placeholder="Km rodados"
              />
            </div>
          </div>
          <div className="flex w-full mb-3 flex-row items-center gap-4">
            <div>
              <p className="mb-2 font-medium">Telefone/Whatsapp</p>
              <Input
                type="text"
                register={register}
                name="whatsapp"
                error={errors.whatsapp?.message}
                placeholder="Whatsapp"
              />
            </div>
            <div>
              <p className="mb-2 font-medium">Cidade</p>
              <Input
                type="text"
                register={register}
                name="city"
                error={errors.city?.message}
                placeholder="Cidade"
              />
            </div>
          </div>
          <div className="mb-3">
            <p className="mb-2 font-medium">Preço</p>
            <Input
              type="text"
              register={register}
              name="price"
              error={errors.price?.message}
              placeholder="Preço"
            />
          </div>
          <div className="mb-3">
            <p className="mb-2 font-medium">Descrição</p>
            <textarea
              className="border-2 w-full rounded-md h-24 px-2"
              {...register("description")}
              name="description"
              id="description"
              placeholder="Descreva o veículo"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description?.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-black rounded-lg w-full h-9 px-8 text-white font-medium"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
