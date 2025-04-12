// App component
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonList from './components/Person/PersonList';
import './App.css';



function App() {
  return (
    <>
      <div>
      <header>
          <Header logo="HR App"/>
      </header>

      <main>
          <PersonList />
      </main>

      <footer>
          <Footer year={2025}/>
      </footer>
      </div>
    </>
  )
}

export default App
