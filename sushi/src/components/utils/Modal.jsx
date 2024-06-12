const Modal = (props) => {

  return (
    <div className={` ${props.modalVisibility} fixed top-0 z-50 w-[1000px] h-[700px] bg-[rgb(255,255,255)] `}>
        <button onClick={props.click}><i className="fa-solid fa-circle-xmark text-zinc-900 text-4xl flex gap-2"></i></button>

        <img src={props.img} />

    </div>
  )
}

export default Modal