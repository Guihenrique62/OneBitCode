
import { useState } from 'react'
import './App.css'
import Button from './components/Button'


function App() {
const [password, setPassword] = useState('')
const [copied, setText] = useState('Copiar')
const [copiedStyleBtn, setStyleBtn] = useState('1px solid black') 
const [passwordSize, setPasswordSize] = useState(10)
const [useUpperCase, setUpperCase] = useState(true)
const [useLowerCase, setLowerCase] = useState(true)
const [useNumbers, setNumbers] = useState(true)
const [useSymbols, setSymbols] = useState(true)

function generateRandomPassword(length: number, useUpperCase: boolean, useLowerCase: boolean, useNumbers: boolean, useSymbols: boolean): void {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  let validChars = '';
  if (useUpperCase) validChars += uppercaseChars;
  if (useLowerCase) validChars += lowercaseChars;
  if (useNumbers) validChars += numberChars;
  if (useSymbols) validChars += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }

  setPassword(password);
  setText("Copiar");
  setStyleBtn("1px solid black")
}

function copyPasswordToClipboard(): void {
  if (password) {
    navigator.clipboard.writeText(password)
      .then(() => {
        setText('Copiado!')
        setStyleBtn("1px solid green")
    
    })
      .catch((error) => console.error('Erro ao copiar a senha:', error));
  }
}

function handleGeneratePassword():void{

  generateRandomPassword(passwordSize,useUpperCase,useLowerCase,useNumbers,useSymbols)
}

  return (
    <div>
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho da senha: </label>
        <input type="number" id="passwordSize" min={1} value={passwordSize} onChange={(ev)=> setPasswordSize(parseFloat( ev.target.value))}/>
        <br />
        <label htmlFor="choiceUpperCase">Utilizar letras maiúsculas?</label>
      <input
        type="radio"
        id="choiceUpperCaseYes"
        name="choiceUpperCase"
        value="true"
        checked={useUpperCase}
        onChange={() => setUpperCase(true)}
      />
      <label htmlFor="choiceUpperCaseYes">Sim</label>
      <input
        type="radio"
        id="choiceUpperCaseNo"
        name="choiceUpperCase"
        value="false"
        checked={!useUpperCase}
        onChange={() => setUpperCase(false)}
      />
      <label htmlFor="choiceUpperCaseNo">Não</label>
      <br />

      <label htmlFor="choiceLowerCase">Utilizar letras minúsculas?</label>
      <input
        type="radio"
        id="choiceLowerCaseYes"
        name="choiceLowerCase"
        value="true"
        checked={useLowerCase}
        onChange={() => setLowerCase(true)}
      />
      <label htmlFor="choiceLowerCaseYes">Sim</label>
      <input
        type="radio"
        id="choiceLowerCaseNo"
        name="choiceLowerCase"
        value="false"
        checked={!useLowerCase}
        onChange={() => setLowerCase(false)}
      />
      <label htmlFor="choiceLowerCaseNo">Não</label>
      <br />

      <label htmlFor="choiceNumbers">Utilizar caracteres Numéricos?</label>
      <input
        type="radio"
        id="choiceNumbersYes"
        name="choiceNumbers"
        value="true"
        checked={useNumbers}
        onChange={() => setNumbers(true)}
      />
      <label htmlFor="choiceNumbersYes">Sim</label>
      <input
        type="radio"
        id="choiceNumbersNo"
        name="choiceNumbers"
        value="false"
        checked={!useNumbers}
        onChange={() => setNumbers(false)}
      />
      <label htmlFor="choiceNumbersNo">Não</label>
      <br />

      <label htmlFor="choiceEspecialChar">Utilizar caracteres Especiais?</label>
      <input
        type="radio"
        id="choiceEspecialCharYes"
        name="choiceEspecialChar"
        value="true"
        checked={useSymbols}
        onChange={() => setSymbols(true)}
      />
      <label htmlFor="choiceEspecialCharYes">Sim</label>
      <input
        type="radio"
        id="choiceEspecialCharNo"
        name="choiceEspecialChar"
        value="false"
        checked={!useSymbols}
        onChange={() => setSymbols(false)}
      />
      <label htmlFor="choiceEspecialCharNo">Não</label>
      <br />


        </div>
        <Button text={'Gerar senha de ' + passwordSize + ' caracteres'} handleBtn={handleGeneratePassword} styles='1px solid black'></Button>
        <Button text={copied} handleBtn={copyPasswordToClipboard}  styles={copiedStyleBtn}></Button>
        <p>{password}</p>
    </div>
  )
}

export default App
