import ImgContainer from "./ImgContainer"
import TextContainer from "./Textcontainer"
import style from "./Card.module.scss"

export default function Card(props: any){


  return (
    <div className={style.card}>
      <ImgContainer/>
      <TextContainer />
    </div>
  )
}