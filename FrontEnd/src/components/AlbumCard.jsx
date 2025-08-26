import "../CSS/AlbumCard.css";
import { useState, useContext } from "react";
import { APIContext } from "./Context";

function AlbumCard({ songname, id, genre }) {
  const { songsData } = useContext(APIContext);
    if (!songsData) return <div>Loading...</div>

  console.log(songsData);
  return (
    <>
      {songsData.map(song => 
    <div className='1' onClick={() => {Details(songsData.id)
    }}>
      {song.songname}
      {song.genre}
    </div>
  ) }
    </>
  );
}

export default AlbumCard;
