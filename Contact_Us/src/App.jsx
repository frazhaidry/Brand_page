// import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeacder/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  // const [count, setCount] = useState(0)

  return <div className="main">
    <Navigation/>
    <main className="main_container">
    <ContactHeader/>
    <ContactForm/>
    </main>
  </div>
}

export default App
