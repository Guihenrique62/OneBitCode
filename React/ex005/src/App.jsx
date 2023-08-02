import { useState } from "react"

export default function App() {

  const [email, setEmail] = useState('')
  const [coment, setcoment] = useState('')
  const [coments, setcoments] = useState(()=>{
    const storedcoments = localStorage.getItem("obc-coments-lib");
    if (!storedcoments) return [];
    return JSON.parse(storedcoments);
  })

  function submitForm(ev){
    ev.preventDefault()
    const currentDate = new Date()
    const ano = currentDate.getFullYear();
    const mes = currentDate.getMonth() + 1; 
    const dia = currentDate.getDate();
    const hora = currentDate.getHours();
    const minuto = currentDate.getMinutes();
    const segundo = currentDate.getSeconds();

    const date = `${dia}/0${mes}/${ano} ${hora}:${minuto}:${segundo}`

    const newComent = {email,coment,date}

    addComent(newComent)
    setEmail('')
    setcoment('')
  }

  const addComent = (newComent) => {
    const coment = {...newComent}
    setcoments((state) => {
      const newState = [coment, ...state];
      localStorage.setItem("obc-coments-lib", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="app">
      <h1>Sessão de comentários</h1>
      <form onSubmit={submitForm}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" placeholder="email@email.com" id='email' name="email" onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="coment">comentario: </label>
        <input type="text" placeholder="comente aqui.." id="coment" name="coment" onChange={(e)=> setcoment(e.target.value)}/>
      </div>

      <button type="submit">Enviar comentário</button>
      <hr />

      </form>
      
      <div>
        {coments.length > 0 ? coments.map((coment)=>(
          <div className="comentContainer">
            <h3>{coment.email}</h3>
            <p>{coment.date}</p>
            <p>{coment.coment}</p>
          </div>          

        )) : (
          <h4>Seja o primeiro a comentar...</h4>
        )
      }
      </div>


    </div>
  )
}