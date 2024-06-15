import { Link } from "react-router-dom";

import Logo from '../../public/logo.svg'

export const Header = () => {
  const navLinks = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "Dashboard", to: "dashboard" },
    { id: 3, title: "Contato", to: "contato" },
  ];

  return (
    <header className="w-full flex items-center justify-evenly p-6 shadow-md">
      <img className="w-44" src={Logo} alt="Logo" />
      <nav className="flex gap-4">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link className="font-medium hover:opacity-50" to={item.to}>{item.title}</Link>
          </li>
        ))}
      </nav>
    </header>
  );
};
