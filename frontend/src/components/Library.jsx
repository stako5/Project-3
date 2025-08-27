import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { APIContext } from "./Context";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "../CSS/Library.css";

function Library() {
  const { songsData } = useContext(APIContext);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/Details/${id}`);
  };

  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <main className="main-content">
        <aside id="sidebar">
          <SideBar />
        </aside>
        <section id="component-container">
          {Array.isArray(songsData) && songsData.length > 0 ? (
            <div className="song-grid">
              {songsData.map((song) => (
                <div
                  key={song.id}
                  className="song-card"
                  onClick={() => handleNavigate(song.id)}
                  tabIndex={0}
                  role="button"
                >
                  <div className="song-title">{song.songname}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-message">No songs available.</div>
          )}
        </section>
      </main>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default Library;
