import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Routing from './components/Routing';
import Linking from './components/Linking';


function App() {
  

  return (
    <>
    <div id="container">
      <Linking/>
      <Routing/>
    </div>
    </>
  )
}

export default App
