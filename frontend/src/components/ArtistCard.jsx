import { useContext } from "react";
import { APIContext } from "./Context";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "../CSS/ArtistsCard.css";

function ArtistCard() {
  const { artistsData } = useContext(APIContext);
  const navigate = useNavigate("");
  console.log(artistsData);
  return (
    <>
      <header className="card-header">
        <h1>STOPIFY</h1>
        <button onClick={() => navigate("/Home")} className="nice-btn">
          Home
        </button>
      </header>
      {artistsData && artistsData.length > 0 ? (
        <ul className="artistlist">
          {artistsData.map((artist) => (
            <li key={artist.id}>
              <label>{artist.name}</label>
              <p>{artist.bio}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No artists to display.</div>
      )}
      <footer className="card-footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default ArtistCard;
