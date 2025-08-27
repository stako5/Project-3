import "../CSS/SongsCard.css";
import { useContext } from "react";
import { APIContext } from "./Context";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function AlbumCard() {
  const { songsData } = useContext(APIContext);
  const navigate = useNavigate("");

  console.log(songsData);
  async function clickHelper(id) {
    const patch = {
      name: "My Playlist",
      description: "Words",
      song: `${id}`
    }
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/playlists/1`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      body: JSON.stringify(patch)
    })
  }

  return (
    <>
      <header className="card-header">
        <h1>STOPIFY</h1>
        <button onClick={() => navigate("/Home")} className="nice-btn">
          Home
        </button>
      </header>
      {songsData && songsData.length > 0 ? (
        <ul className="songslist">
          {songsData.map((songs) => (

              <li key={songs.id}>
                <img src={songs.cover_art} alt={songs.songname} />
                <label>{songs.songname}</label>
                <button className="btn" onClick={() => clickHelper(songs.id)}>Add this song to your playlist</button>
              </li>
          ))}
        </ul>
      ) : (
        <div>No albums to display.</div>
      )}
      <footer className="card-footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default AlbumCard;
