import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Playlist() {
  const [playlist, setPlaylist] = useState([{id: 0}])
  const [ myPlaylist, setMyPlaylist ] = useState(null)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/playlists`)
    .then(res => res.json())
    .then(data => {
      var playlist = data.filter((play) => play.id == 1)
      return playlist;
    })
    .then(output => {
      setPlaylist(output)
      let string = output[0].songs_array
      let list1 = string.split(', ')
      return list1
    })
    .then(data => {
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/songs`)
      .then(res=> res.json())
      .then(songs => {
        let matching = []
        for(let song of songs) {
          for(let item of data){
            if(song.id == item){
              matching.push(song)
          }}
        }
        setMyPlaylist(matching)
      })
    })
  }, [])

  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <main>
        <h1>{playlist[0].name}</h1>
        <p>{playlist[0].description}</p>

        {myPlaylist && myPlaylist.length > 0 ? (
        <ul className="songslist">
          {myPlaylist.map((songs) => (
              <li key={songs.id}>
                <img src={songs.cover_art} alt={songs.songname} />
                <label>{songs.songname}</label>
              </li>
          ))}
        </ul>
      ) : (
        <div>No playlists to display.</div>
      )}
      </main>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default Playlist;
