import { useState, useContext } from "react";
import {APIContext} from './Context'
import NavBar from "./NavBar";

function Library() {
  const { songsData } = useContext(APIContext);
  if (typeof songsData !== "object") {
    console.log('error')
  } else {
     console.log( songsData);
  }

  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
    </>
  );
}

export default Library;
