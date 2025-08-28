import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Playlist() {
  const [playlist, setPlaylist] = useState([{id: 0}])
  const [ myPlaylist, setMyPlaylist ] = useState(null)
  const [ name, setName ] = useState(undefined)
  const [ desc, setDesc] = useState(undefined)
  const [ form, setForm ] = useState({name: '', description: ''})
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

  useEffect(() =>{
    setForm({name: name, description: desc})
  },[desc, name])
  function eventHandler() {
    //setForm({name: name, description: desc})


      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/playlists/1`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      body: JSON.stringify(form)
      })
      .then(
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/playlists`)
        .then(res => res.json())
        .then(data => {
          var playlist = data.filter((play) => play.id == 1)
          setPlaylist(playlist);
          console.log(playlist[0].description)
          })
      )

    // setName(null)
    // setDesc(null)
  }

  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <main>
        <div className='formContainer'>
          <input
            type='text'
            placeholder='Set name here'
            onChange={(e) => setName(e.target.value)}
            value={name}>
          </input>
          <input
            type='text'
            placeholder='Set description here'
            onChange={(e) => setDesc(e.target.value)}
            value={desc}>
          </input>
          <button onClick={() => eventHandler()}>Submit</button>
        </div>
        <div>
          <h1>{
          name
          || 'My Playlist'
          }</h1>
          <p>{playlist[0].description}</p>
        </div>
        <div>
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
          <div>No songs to display.</div>
        )}
        </div>

      </main>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default Playlist;
