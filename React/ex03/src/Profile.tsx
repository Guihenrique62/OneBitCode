interface ProfileProps {
  avatar: string;
  name: string;
}



export default function Profile({avatar,name}:ProfileProps){

  return (
    <>
      <div className="img-container">
        <img src={avatar} />
      </div>
      <h2 className="name">{name}</h2>
    </>
  )
}  