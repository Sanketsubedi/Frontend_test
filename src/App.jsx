import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Testo from './components/Testo';
import Stats from './components/Stats';
import Fotter from './components/Fotter';
function App() {


  return (
    <Router>
      <Nav/>
      <Hero/>
      <Stack/>
      <Testo/>
      <Stats/>
      <Fotter/>
      {/* <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/' element = {<Stack/>}/>
      </Routes> */}
    </Router>
  )
}

export default App
