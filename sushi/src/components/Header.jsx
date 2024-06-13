import { useState } from 'react'
import Logo from '../assets/logo.webp'

const Header = () => {
    const navbar = [
        {id:1, title:"Home", link:"#hero"},
        {id:2, title:"Menu", link:"#menu"},
        {id:3, title:"Sobre Nós", link:"#about"},
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [newClass, setNewClass] = useState('hidden')

    const OpenModal = () => {
        
        if(isOpen) {
            setIsOpen(!isOpen)
            setNewClass('flex')
        } else {
            setIsOpen(!isOpen)
            setNewClass('hidden')
        }
    }


    return (
    <header className=' flex items-center justify-around w-full py-4 z-50 fixed top-0 text-zinc-50 bg-zinc-950'>
        <img className='w-48' src={Logo} alt="logo Sushinit" />
        <nav className='lg:flex hidden'>
            <ul className='flex gap-8'>
                {navbar.map(item => (
                    <li className='hover:text-[#ff0019] hover:font-bold transition-all delay-[30ms] font-medium lowercase' key={item.id}><a href={item.link}>{item.title}</a></li>
                ))}
            </ul>
        </nav>

        <i onClick={OpenModal} className="lg:hidden text-3xl fa-solid fa-bars"></i>
        <div onClick={OpenModal}  className={`${newClass} lg:hidden fixed flex-col items-center justify-center top-0 backdrop-blur-md w-screen h-screen`}>
        <i onClick={OpenModal} className="fa-solid fa-xmark text-4xl fixed top-4 right-11"></i>
            <ul className='flex flex-col gap-8'>
                    {navbar.map(item => (
                        <li className='hover:text-[#ff0019] hover:font-bold text-center transition-all  text-2xl delay-75 font-medium lowercase' key={item.id}><a href={item.link}>{item.title}</a></li>
                    ))}
                </ul>
            
        </div>
    </header>
  )
}

export default Header