import Logo from '../assets/logo.webp'

const Header = () => {
    const navbar = [
        {id:1, title:"Home", link:"#hero"},
        {id:2, title:"Menu", link:"#menu"},
        {id:3, title:"Sobre Nós", link:"#about"},
    ]
    return (
    <header className='flex items-center justify-around w-full py-4 z-50 fixed top-0 mx-auto text-zinc-50 bg-zinc-950'>
        <img className='w-48' src={Logo} alt="logo Suhinit" />
        <nav>
            <ul className='flex gap-4'>
                {navbar.map(item => (
                    <li className='hover:text-[#ff0019] hover:font-bold transition-all delay-75 font-medium lowercase' key={item.id}><a href={item.link}>{item.title}</a></li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header