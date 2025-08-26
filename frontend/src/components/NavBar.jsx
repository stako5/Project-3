import { useState } from "react";
import { Link } from "react-router-dom"
import '../CSS/NavBar.css'

function NavBar() {
  return (
    <>
    <nav className="topnav">
      <Link to="/"><button className="nav-btn">Home</button></Link>
      <Link to="/Playlist"><button className="nav-btn">Playlists</button></Link>
      <Link to="/Library"><button className="nav-btn">Library</button></Link>
      <Link to="/Login"><button className="nav-btn">Login/Register</button></Link>
    </nav>
    </>
    );
}

export default NavBar;
