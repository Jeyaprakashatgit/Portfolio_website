import { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './Components/Nav';
import About from "./Pages/About";
import Contactme from "./Pages/Contactme";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Mywork from "./Pages/Mywork";

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Nav/>
      </div>
      
     
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/mywork" element={<Mywork/>}/> 
      <Route path="/contactme" element={<Contactme/>} />
      

     </Routes>
    </div>
  );
}

export default App;
