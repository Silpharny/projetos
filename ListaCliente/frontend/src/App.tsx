import { CiTrash } from "react-icons/ci";

import { useEffect, useState, useRef, FormEvent } from "react";
import {api} from "./services/api"

interface CustomerProps {
  id: string
  name: string
  email: string
  status: boolean
  create_at: string
}

function App() {

  const [customers, setcustomers] = useState<CustomerProps[]>([])
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const statusRef = useRef<HTMLSelectElement | null>(null)

  useEffect(() => {
    loadCustomers()
  }, [])

  async function loadCustomers() {
    const response = await api.get("/customers")
    setcustomers(response.data)
  }
  

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if(!nameRef.current?.value || !statusRef.current?.value) return

    

    const response = await api.post("/customer", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      status: (statusRef.current?.value == 'true' ? true : false)
    })
      setcustomers(allCustommer => [...allCustommer, response.data]) 

      nameRef.current.value = ""
      emailRef.current.value = ""
      
  }

  async function deleteCustomer(id:string) {
    try{
      await api.delete("/customer", {
        params: {
          id:id
        }
      })

      const allCustomers = customers.filter( (customer) => customer.id !== id)
      setcustomers(allCustomers)

    } catch(err){
      console.log(err);  
    }
  }


  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl text-center">
        <h1 className="text-4xl font-medium text-zinc-50">Clientes</h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-zinc-50 text-left">Nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome completo..."
            ref={nameRef}
            className="w-full mb-5 p-2 rounded outline-none"
          />

          <label className="font-medium text-zinc-50 text-left">Email:</label>
          <input
            type="email"
            placeholder="Digite seu email..."
            ref={emailRef}
            className="w-full mb-5 p-2 rounded outline-none"
          />
          
          <label className="font-medium text-zinc-50 text-left">Status:</label>
          <select
          ref={statusRef}
            className="w-full mb-5 p-2 rounded outline-none"
          >
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
          </select>

          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />
        </form>

        <section className="flex flex-col">

          {customers.map(customer => 
          <article  key={customer.id} className="w-full text-left bg-zinc-50 rounded p-2 relative hover:scale-105 duration-200 mb-3">
            
            <p>
              <span className="font-medium">Nome: </span>{customer.name}
            </p>
            <p>
              <span className="font-medium">Email: </span>{customer.email}
            </p>
            <p>
              <span className="font-medium">Status: </span>{customer.status ? <span className="bg-green-400">Ativo</span> : <span className="bg-red-400">Inativo</span>}
            </p>
            

            <button 
              onClick={() => deleteCustomer(customer.id)}
              className="flex flex-col items-center justify-center w-10 h-10 bg-red-500 p-2 rounded-full absolute -right-3 -top-3 hover:rotate-[360deg] duration-500 hover:bg-red-600"
            >
              <CiTrash 
                size={25}
                color="#fff"
              />
            </button>
          </article>
          
          )}

        </section>
      </main>
    </div>
  );
}

export default App;
