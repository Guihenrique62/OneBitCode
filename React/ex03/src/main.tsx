import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './Profile.tsx'
import './index.css'
import avatarUrl from './assets/avatar1.jpg'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Profile avatar={avatarUrl} name='John Doe'/>
  </React.StrictMode>,
)
