const Button = ({link, title, icon, classGeral}) => {

  return <a href={link} className={classGeral + " cursor-pointer bg-[#ff0019] p-3 rounded-lg shadow-[#ff0019] shadow-sm text-zinc-50 font-bold flex items-center justify-center gap-2"}>{title} <i className={icon}></i></a>
}

export default Button