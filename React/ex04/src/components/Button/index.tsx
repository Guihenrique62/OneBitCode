
interface PropsBtn{
    text:string,
    handleBtn: any
    styles: string
}

function Button({text,handleBtn,styles}:PropsBtn) {


  return (
    <button style={{
        border: styles,
        width: "8rem",
        height: "3rem",
        backgroundColor: "#333",
        color: "#fff",
        margin: "0 10px 0 10px"
    }} onClick={handleBtn}>{text}</button>
  )
}

export default Button
