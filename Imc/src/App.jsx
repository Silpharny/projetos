
import { useRef, useState } from "react"
import ImcTable from "./components/ImcTable"

function App() {
  let weightRef = useRef()
  let heightRef = useRef()
  let [imc, setImc] = useState(null)

  let [table, setTable] = useState(false)
  
  let [weight, setWeight] = useState()
  let [height, setHeight] = useState()
  
  const [imcResult, setImcResult] = useState("")

  function CalcImc(event) {
    setWeight(weightRef.current.value)
    setHeight(heightRef.current.value)

    let calc

    if(!weightRef.current.value == '' && !heightRef.current.value == '') {
      calc = weightRef.current.value / (heightRef.current.value * heightRef.current.value)
      setImc(calc.toFixed(2))
    } else {
      setImc(null)
    }
    event.preventDefault();
    setTable(true)

      
      if (calc < 17) {
          setImcResult("Muito abaixo do peso")
      } else
  
      if(calc >= 17 && calc <= 18.49) {
          setImcResult("Abaixo do peso")
      } else
  
      if(calc >= 18.5 && calc <= 24.99) {
          setImcResult("Peso normal")
      } else
  
      if(calc >= 25 && calc <= 29.99) {
          setImcResult("Acima do peso")
      } else 
      
      if(calc >= 30 && calc <= 34.99) {
          setImcResult("Obesidade I")
      } else
  
      if(calc >= 35 && calc <= 39.99) {
          setImcResult("Obesidade II (Severa)")
      } else
  
      if(calc >= 40) {
          setImcResult("Obesidade III (Mórbida)")
      }
  }


  
  return (

    <main className="bg-white w-96 rounded-xl m-auto overflow-auto flex flex-col items-center">
      <h1 className="text-center pt-10 text-2xl font-bold">Calculadora IMC</h1>
      
      <form noValidate className="flex flex-col p-7">
        <label className="pb-2" htmlFor="weight">Weight</label>
        <input className="h-10 border border-gray-300 outline-none p-4 mb-5" type="number" id="weight" ref={weightRef} placeholder="KG" />

        <label className="pb-2" htmlFor="height">Height</label>
        <input className="h-10 border border-gray-300 outline-none p-4 mb-5" type="number" id="height" ref={heightRef} placeholder="M" />

        <button type="submit" className="my-5 p-2 border-none border-r-2 bg-green-300 hover:bg-green-200" id="calculate" onClick={CalcImc}>Calculate</button>
      </form>
      
      
      <ImcTable weight={weight} height={height} imc={imc} imcTable={imcResult} table={!table || imc == null ? 'hidden' : 'block'} />
    
    </main>

  )
}

export default App
