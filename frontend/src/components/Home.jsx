import { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";
import PlaylistCard from "./PlaylistCard";
import ArtistCard from "./ArtistCard";
import "../CSS/Home.css";

function Home() {
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
        <footer class="footer">
          &copy; 2025 STOPIFY. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default Home;
