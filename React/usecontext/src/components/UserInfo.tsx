import { useContext } from "react"
import UserContext from "../contexts/userContext"

interface user{
    name:string,
    email:string
}

export default function UserInfo(){

    const user = useContext<user>(UserContext)

    return (
        <div>
            <h2>Informações do Usuario</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}