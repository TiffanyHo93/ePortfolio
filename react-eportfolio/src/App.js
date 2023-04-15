import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills'
import Project from './components/Project';
import bg from './assets/bg.jpg'

function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover" >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
