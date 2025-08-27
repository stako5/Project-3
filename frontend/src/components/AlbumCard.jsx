import "../CSS/AlbumCard.css";
import { useContext } from "react";
import { APIContext } from "./Context";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function AlbumCard() {
  const { albumsData } = useContext(APIContext);

  console.log(albumsData);

  const navigate = useNavigate("");

  const handleNavigate = (id) => {
    navigate(`/Album/${id}`);
  };

  return (
    <>
      <header className="card-header">
        <h1>STOPIFY</h1>
        <button onClick={() => navigate("/Home")} class="nice-btn">
          Home
        </button>
      </header>
      {albumsData && albumsData.length > 0 ? (
        <ul id="albumlist">
          {albumsData.map((album) => (
            <li
              key={album.id}
              id="album-card"
              onClick={() => handleNavigate(album.id)}
            >
              <img src={album.cover_art} alt={album.name} id="album-pic" />
              <label>{album.name}</label>
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
