import { ReactNode, useContext } from "react"
import { AuthContext } from "../contexts/authContext"
import { Navigate } from "react-router-dom"

interface PrivateProps {
  children: ReactNode
}

export function Private({ children }: PrivateProps) {
  const { signed, loadingAuth } = useContext(AuthContext)

  if (loadingAuth) {
    return <p>Carregando...</p>
  }

  if (!signed) {
    return <Navigate to="/login" />
  }

  return children
}
