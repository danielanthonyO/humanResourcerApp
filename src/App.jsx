import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Person from './components/Person';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <header>
      <Header logo="HR App"/>
      </header>
      <main>
      <Person name="Alice Johnson" title="HR Manager" salary="4000" phone="+123456789" email="alice@hrapp.com" animal="Owl"/>
      <Person name="Vera Thomas" title="QA Manager" salary="4200" phone="+123456778" email="vera@hrapp.com" animal="Cat"/>
      <Person name="Laura Rainen" title="Project Manager" salary="5000" phone="+123456772" email="laurea@hrapp.com" animal="Dog"/>
      <Person name="Timothy John" title="Program Manager" salary="4500" phone="+123456780" email="timo@hrapp.com" animal="Eagle"/>
      <Person name="Elina Sankara" title="System Manager" salary="4200" phone="+123456778" email="elina@hrapp.com" animal="Wolf"/>
      <Person name="Sefik Nodman" title="General Manager" salary="5000" phone="+123456773" email="sefik@hrapp.com" animal="Parrot"/>
      </main>
      <footer>
      <Footer year={2025}/>
      </footer>
      </div>
    </>
  )
}

export default App
