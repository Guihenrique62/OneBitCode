import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from './Card.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Card title='Pôster: Star Wars (1997)'/>
    <Card title='Pôster: Empire Strikes back (1988)'/>
    <Card title='Pôster: Return of Jedi (1983'/>

  </React.StrictMode>,
)
