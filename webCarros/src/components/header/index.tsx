import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import { FiLogIn, FiUser } from "react-icons/fi"

export function Header() {
  const signed = false
  const loadingAuth = false

  return (
    <div className="w-full h-20 flex items-center justify-center bg-white drop-shadow mb-4">
      <header className="flex w-full items-center justify-between max-w-7xl px-4 mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo do site" />
        </Link>
        <Link
          to={signed ? "/dashboard" : "/login"}
          className="border-2 rounded-full p-2 border-gray-500"
        >
          {signed ? (
            <FiUser size={22} color="#000" />
          ) : (
            <FiLogIn size={22} color="#000" />
          )}
        </Link>
      </header>
    </div>
  )
}
