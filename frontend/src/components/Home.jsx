import { useState, useContext } from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import PlaylistCard from "./PlaylistCard";
import ArtistCard from "./ArtistCard";
import "../CSS/Home.css";
import { APIContext } from "./Context";

function Home() {
  const { songsData, playlistsData, usersData, albumsData, artistsData } = useContext(APIContext);
  if (!songsData || !playlistsData || !usersData || !albumsData || !artistsData){
    return (<h1>Loading
    </h1>)
  } else {
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
          <div id="compnent-container">
            <PlaylistCard />
            <ArtistCard />
          </div>
        </main>
        <footer className="footer">
          &copy; 2025 STOPIFY. All rights reserved.
        </footer>
      </div>
    </>
  );
}
}

export default Home;
