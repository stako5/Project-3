import { useState, useContext } from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import PlaylistCard from "./PlaylistCard";
import ArtistCard from "./ArtistCard";
import "../CSS/Home.css";
import { APIContext } from "./Context";

function Home() {
  const { songsData } = useContext(APIContext);

  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <div>
        <main>
          <div id="sidebar">
            <Sidebar />
          </div>
          <div className="component-container">
            {songsData && songsData.length > 0 ? (
              <ul>
                {songsData.map((songs) => (
                  <li key={songs.id}>
                    <img src={songs.cover_art} alt={songs.songname} />

                    <label>{songs.songname}</label>
                  </li>
                ))}
              </ul>
            ) : (
              <div>No albums to display.</div>
            )}
          </div>
          <PlaylistCard />
        </main>
        <footer className="footer">
          &copy; 2025 STOPIFY. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default Home;
