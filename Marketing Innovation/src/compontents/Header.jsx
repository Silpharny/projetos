import ConferenceLogo from '../assets/eventLogo.svg'

function Header(props) {
  return (
    <header className="w-full h-16 px-5 z-50 flex md:justify-around justify-between items-center shadow-sm shadow-zinc-300 sticky top-0 bg-zinc-50">
      <img className='w-36 md:w-52' src={ConferenceLogo} alt="Logo" />
      <nav>
        <ul className="flex gap-3 items-center">
          <li className="text-sm md:text-base px-3 py-1 cursor-pointer hover:opacity-65"><a href="#home">Home</a></li>
          <li className="text-sm md:text-base px-3 py-1 cursor-pointer hover:opacity-65"><a href="#about">About us</a></li>
          <li className="text-sm md:text-base px-3 py-1 cursor-pointer hover:opacity-65"><a href="#ticket">Get a ticket</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
