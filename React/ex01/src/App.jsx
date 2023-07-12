export default function App(){
  return (
    <>
    <div className="main text-light text-center">
      <img src="/react.png" className="react-image" />
      <h1 className="py-3">React</h1>
      <p className="py-3">A biblioteca para interfaces de usuario web e nativos</p>
      <div className="btn-container ">
        <button type="button" className="btn btn-info mx-3">Aprenda React</button>
        <button type="button" className="btn btn-info mx-3">Referencia da API</button>
      </div>

      <h2>Crie Interfaces de usuário de componentes</h2>
      <p>React permite que voce contrua interfaces de usuario a partir de pedaçoes individuais chamados componentes</p>

      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções JavaScript. a sintaxe de marcação é chamda de JSX. É uma extensão da sintaxe Javascript popularizada pelo React</p>

      <h2>Próximos Passos</h2>
      <ul className="list-group">
        <li className="list-group-numbered">Uso de dados dinamicos no JSX</li>
        <li className="list-group-numbered">Criação de novos componentes</li>
        <li className="list-group-numbered">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, quisquam.</li>
        <li className="list-group-numbered">Lorem ip ipsum dolor sit.</li>
        <li className="list-group-numbered">Lorem ipsum dolor sit.</li>
      </ul>
    </div>
    </>
  )
}