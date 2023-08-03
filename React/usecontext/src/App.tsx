import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/userContext"


export default function App(){
  const user = {
    name:'João',
    email:"joao@gmail.com"
  }

  return(
    <UserContext.Provider value={user}>
      <h1>Usando Contexto</h1>
      <UserInfo></UserInfo>
    </UserContext.Provider>
  )
}