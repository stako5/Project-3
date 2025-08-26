import { useContext, useState } from "react";
import { APIContext } from "./Context";

function Details() {
  const { songsData, playlistsData, albumsData, artistsData } =
    useContext(APIContext);

  if (typeof songsData !== "object") {
    console.log("error");
  } else {
    console.log(songsData);
  }
  return (
    <>
      <h3>details</h3>
      <ul>
        {songsData.map((song) => (
          <li key={song.id}>
            {song.songname} {song.genre}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Details;
