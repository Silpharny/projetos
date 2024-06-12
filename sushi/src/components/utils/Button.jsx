const Button = (props) => {

  return <a href={props.link} className={props.classGeral + " cursor-pointer w-52 bg-[#ff0019] p-3 rounded-lg shadow-[#ff0019] shadow-sm text-zinc-50 font-bold flex items-center justify-center gap-2"}>{props.title} <i className={props.icon}></i></a>
}

export default Button