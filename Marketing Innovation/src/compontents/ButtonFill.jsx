function ButtonFill(props) {
    return (
        <a href={props.link}><button className="w-36 h-10 bg-zinc-100 rounded-lg text-zinc-900 font-semibold text-lg hover:bg-opacity-70">{props.title}</button></a>
    )
}

export default ButtonFill