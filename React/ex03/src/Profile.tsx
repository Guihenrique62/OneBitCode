import Button from './Button';
import style from './profile.module.scss';



interface ProfileProps {
  avatar: string;
  name: string;
  number: string;
  email: string;
}



export default function Profile({avatar,name,number,email}:ProfileProps){

  return (
    <div className={style.profileContainer}>
      <div className={style.imgContainer}>
        <img src={avatar} />
      </div>
      <h2>{name}</h2>
      <p>+{number}</p>
      <p>{email}</p>
      <Button text='GitHub'/>
      <Button text='Linkedin'/>
      <Button text='Twitter'/>

    </div>
  )
}  