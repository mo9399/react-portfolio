import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const page = () => {
    switch(currentPage) {
      case 'about': return <About/>;
      case 'projects': return <Projects/>
      case 'contact': return <Contact/>
      default: return
    }
  };


  return (
    <div>
      <Header
       setCurrentPage={setCurrentPage} currentPage={currentPage}>
      </Header>
      <main>
        {page()}
      </main>
    </div>
  );
}

export default App;
