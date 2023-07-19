import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './Profile.tsx'
import './index.css'
import avatarUrl from './assets/avatar.png'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Profile avatar={avatarUrl} name='John Doe' number='5562991556834' email='guibonito@123'/>
    <Profile avatar={avatarUrl} name='Guilherme' number='5562991556834' email='guibonito@123'/>

  </React.StrictMode>,
)
