import Countdown from "react-countdown";


function CountdownEdit() {
    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <span className="mt-4 font-bold text-zinc-100 text-2xl flex gap-3 w-96 h-24 py-5 px-4">
                <span className="w-96 bg-zinc-800 rounded-md">
                    {hours} 
                    <p className="text-sm font-light">Hours</p>
                </span>
                <span className="w-96 bg-zinc-800 rounded-md">
                    {minutes}
                    <p className="text-sm font-light">Minutes</p>
                </span>
                <span className="w-96 bg-zinc-800 rounded-md">
                    {seconds}
                    <p className="text-sm font-light">Seconds</p>
                </span>
            </span>
            
        )
    }
   
    return(
        <Countdown date={Date.now() + (60 * 60000)} renderer={renderer} />
    )
}
export default CountdownEdit