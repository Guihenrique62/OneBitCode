import { useState } from 'react';
import Button from './Button';
import style from './profile.module.scss';



interface ProfileProps {
  avatar: string;
  name: string;
  number: string;
  email: string;
}



export default function Profile({avatar,name,number,email}:ProfileProps){
  
  const [followText, setfollowText] = useState("Follow")

  function handleClick(){
    if(followText === "Follow"){
      alert("Agora você está seguindo esta pessoa")
      setfollowText("Unfollow")
    }else{
      alert("Você deixou de seguir esta pessoa")
      setfollowText("Follow")
    }
  }

  

  return (
    <div className={style.profileContainer}>
      <div className={style.imgContainer}>
        <img src={avatar} />
      </div>
      <h2>{name}</h2>
      <button onClick={handleClick} className={style.followBtn}>{followText}</button>
      <p>+{number}</p>
      <p>{email}</p>
      <Button text='GitHub'/>
      <Button text='Linkedin'/>
      <Button text='Twitter'/>

    </div>
  )
}  