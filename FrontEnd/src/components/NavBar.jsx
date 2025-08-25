import { useState } from "react";
import { Link } from "react-router-dom"


function NavBar() {
  return (
    <>
    <nav>
      <Link to="/"><button>Home</button></Link>
      <Link to="/Playlist"><button>Playlists</button></Link>
      <Link to="/Library"><button>Library</button></Link>
      <Link to="/Login"><button>Login/Register</button></Link>
    </nav>
    </>
    );
}

export default NavBar;
