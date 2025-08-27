import { useState, useContext } from "react";
import React from "react";
import myTrack from "../assets/TrollSong.mp3";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import PlaylistCard from "./PlaylistCard";
import "../CSS/Home.css";
import { APIContext } from "./Context";

function Home() {
  const { songsData } = useContext(APIContext);
  const audioRef = React.useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

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
                    <button onClick={handlePlay}>Play Music</button>
                    <audio ref={audioRef} src={myTrack} preload="auto" />
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
