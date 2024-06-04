function CardSpeakers(props) {
    return(
        <div className='w-48 h-72 flex flex-col items-center justify-evenly shadow-sm shadow-zinc-400 rounded-lg'>
            <img className='w-32 rounded-full shadow-md shadow-zinc-500' src={props.img} alt="speaker" />
            <div>
                <h3 className='font-bold'>{props.name}</h3>
                <p className='text-red-500'>{props.senior}</p>
            </div>

        </div>
    )
}

export default CardSpeakers