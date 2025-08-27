import { useContext, useState } from "react";
import { APIContext } from "./Context";
import NavBar from "./NavBar";

function GenreList() {
  return (
    <>
      <header className="card-header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default GenreList;
