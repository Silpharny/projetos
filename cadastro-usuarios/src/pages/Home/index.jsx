import { useEffect, useState, useRef } from "react";

import "./style.css";
import trashIcon from "../../assets/trash.svg";

import api from "../../services/api";

function Home() {
  let [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers() {
    const usersFromApi = await api.get("/users")

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post("/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" type="text" name="nome" ref={inputName} />
        <input placeholder="Email" type="email" name="email" ref={inputEmail} />
        <input placeholder="idade" type="text" name="idade" ref={inputAge} />
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={()=> deleteUsers(user.id)}> 
            <img src={trashIcon} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
