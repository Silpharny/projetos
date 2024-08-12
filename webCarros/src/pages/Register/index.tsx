import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { Container } from "../../components/container"
import { Input } from "../../components/input"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { auth } from "../../services/firebaseConnection"
import { AuthContext } from "../../contexts/authContext"

import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
import { useContext, useEffect } from "react"
import toast from "react-hot-toast"

const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  email: z
    .string()
    .email("Insira um Email válido")
    .nonempty("O campo email é obrigatório"),

  password: z
    .string()
    .nonempty("O campo senha é obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
})

type FormData = z.infer<typeof schema>
export function Register() {
  const { handleUserInfo } = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  useEffect(() => {
    async function signOutUser() {
      await signOut(auth)
    }

    signOutUser()
  }, [])

  async function onSubmit(data: FormData) {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        await updateProfile(userCredential.user, {
          displayName: data.name,
        })

        toast.success("Cadastrado com sucesso!")
        handleUserInfo({
          uid: userCredential.user.uid,
          name: userCredential.user.displayName,
          email: userCredential.user.email,
        })
        navigate("/dashboard", {
          replace: true,
        })
      })
      .catch((error) => {
        console.error(error)
        toast.error("Erro ao fazer cadastro")
      })
  }

  return (
    <Container>
      <div className="w-full min-h-screen flex  justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img className="w-full" src={Logo} alt="Logo" />
        </Link>

        <form
          className="bg-white max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4 ">
            <Input
              type="text"
              placeholder="Digite seu nome..."
              name="name"
              error={errors.name?.message}
              register={register}
            />
            <Input
              type="email"
              placeholder="Digite seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
            <Input
              type="password"
              placeholder="**********"
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>
          <button
            className="bg-red-500 w-full mt-4 rounded-lg h-9 px-8 text-white font-medium text-lg"
            type="submit"
          >
            Registrar
          </button>
        </form>

        <Link to="/login">Ja possuo uma conta? Faça login!</Link>
      </div>
    </Container>
  )
}
