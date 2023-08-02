import { useRef, useState } from "react"
import ExampleRef from "./ExampleRef"

export default function App() {

  let vari = 0  
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variável: ${vari}
      Ref ${ref.current}
      State ${state}
    `)
  }

  return ( 
    <div>
      <h1>manipulando DOM</h1>
      <ExampleRef></ExampleRef>
      <hr />
      <h1>manipulando valores</h1>
      <hr />
      <p>Variavel {vari}</p>
      <p>Ref: {ref.current}</p>
      <p>state: {state}</p>
      <button onClick={showValues}>Exibir Valores</button>
      <hr />
      <button onClick={()=> vari++}>Aumentar Variavel</button>
      <button onClick={()=> ref.current++}>Aumentar ref</button>
      <button onClick={()=> setState(state => state + 1)}>Aumentar state</button>
    </div>
  )
}