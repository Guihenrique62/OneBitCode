import { useRef } from "react"

export default function ExampleRef() {

    const inputElement = useRef(null)

    const handleClick = () => {
        if(inputElement.current){
            console.log(inputElement.current)
            inputElement.current.focus()
            inputElement.current.style.backgroundColor = "#F64348"
        }
        
    }

    return (
        <div>
            <input ref={inputElement} type="text" />
            <button onClick={handleClick}>Focar no input</button>
        </div>
    )
}