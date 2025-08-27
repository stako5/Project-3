import { useState } from "react";
import NavBar from "./NavBar";

function Playlist() {
  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <main>
        <h1>test</h1>
      </main>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default Playlist;
