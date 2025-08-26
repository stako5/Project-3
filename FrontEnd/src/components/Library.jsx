import { useState, useContext } from "react";
import { APIContext } from "./Context";
import NavBar from "./NavBar";
import Details from "./Details";
import GenreList from "./GenreList";
import AlbumCard from "./AlbumCard";
import "../CSS/Library.css";

function Library() {
  const { songsData } = useContext(APIContext);
  
  if (typeof songsData !== "object") {
    songsData = [{id: 1, genre: 'hiphop', songname: 'test'}];
    console.log("error");
  } else {
    console.log(songsData);
  }

  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <body className="body">
        <div className="genrelist">
          <GenreList />
        </div>
        <div className="results">
          {/* <div>
            {songsData.map(show => (
              <AlbumCard key={songsData.id} id={songsData.id} genre={songsData.genre} songname={songsData.songname} />              
            ))}
          </div> */}
          {songsData ? <div className="album">
            {songsData.map(song => 
              <AlbumCard key={songsData.id} id={songsData.id} genre={songsData.genre} songname={songsData.songname} />
            )}
          </div>
          :  <h1>Loading...</h1>
        }

          
          <div className="details">
            <Details />
          </div>
        </div>
      </body>
    </>
  );
}

export default Library;
