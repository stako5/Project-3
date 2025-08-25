import {Routes, Route} from "react-router-dom"


import Library from "./components/Library"; 
import Login from "./components/Login"; 
import Playlist from "./components/Playlist";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="*"/>
        <Route path="/Playlist" element={<Playlist/>}/>
        <Route path="/Library" element={<Library/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes> 
      
    </>
  );
}

export default App;
