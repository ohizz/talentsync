import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Middle } from './components/Middle'
import { Testimonies } from './components/Testimonies'
import { Faq } from './components/Faq'


function App() {

  return (
    <div className=''>
      <Header />
      <Middle/>
      <Testimonies />
      <Faq/>
    </div>
  )
}

export default App
