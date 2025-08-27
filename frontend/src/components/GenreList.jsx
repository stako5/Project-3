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
    </>
  );
}

export default GenreList;
