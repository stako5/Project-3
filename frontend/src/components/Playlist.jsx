import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Playlist() {
  const [playlist, setPlaylist] = useState([{id: 0}])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/playlists`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      var playlist = data.filter((play) => play.id == 1)
      console.log(playlist)
      return playlist;
    })
    .then(output => setPlaylist(output))
  }, [])
  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <main>

        {console.log(playlist[0])}
        <h1>{playlist[0].name}</h1>
        <p>{playlist[0].description}</p>
        <p>{playlist[0].songs_array}</p>
      </main>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default Playlist;
