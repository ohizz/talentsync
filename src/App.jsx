
import './App.css'
import { Header } from './components/Header'
import { Middle } from './components/Middle'
import { Testimonies } from './components/Testimonies'
import { Faq } from './components/Faq'
import {Footer} from './components/Footer'
import { Mockup } from './components/Mockup'


function App() {

  return (
    <div className=''>
      <Header />
      <Middle/>
      <Testimonies />
      <Faq />
    <Mockup/>
      <Footer/>
    </div>
  )
}

export default App
