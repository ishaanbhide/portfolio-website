import React, {useState} from 'react';
import './App.scss';
import Topbar from "./Components/Topbar/Topbar";
import Menu from './Components/Menu/Menu';
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
        <Intro/>
        <Skills/>
        <div className="projectSection">
          <Projects/>
        </div>
        <Contact/>
     </div>
    </div>
  );
}

export default App;
