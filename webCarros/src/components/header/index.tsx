import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { FiLogIn, FiUser } from "react-icons/fi"

export function Header() {
  const { signed, loadingAuth } = useContext(AuthContext)

  return (
    <div className="w-full h-20 flex items-center justify-center bg-white drop-shadow mb-4">
      <header className="flex w-full items-center justify-between max-w-7xl px-4 mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo do site" />
        </Link>

        {!loadingAuth && signed && (
          <Link
            to="/dashboard"
            className="border-2 rounded-full p-2 border-gray-500"
          >
            <FiUser size={22} color="#000" />
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link
            to="/login"
            className="border-2 rounded-full p-2 border-gray-500"
          >
            <FiLogIn size={22} color="#000" />
          </Link>
        )}
      </header>
    </div>
  )
}
