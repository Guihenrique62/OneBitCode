
import { useState } from 'react'
import './App.css'
import Button from './components/Button'


function App() {
const [password, setPassword] = useState('')
const [copied, setText] = useState('Copiar')
const [copiedStyleBtn, setStyleBtn] = useState('1px solid black') 

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


  return (
    <div>
      <h1>Gerador de Senhas</h1>
      <Button text="Gerar" handleBtn={() => generateRandomPassword(10,true,true,true,false)} styles='1px solid black'></Button>
      <Button text={copied} handleBtn={copyPasswordToClipboard}  styles={copiedStyleBtn}></Button>
      <p>{password}</p>
    </div>
  )
}

export default App
