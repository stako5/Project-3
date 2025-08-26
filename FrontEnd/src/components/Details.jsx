import { useContext, useState } from "react";
import { APIContext } from "./Context";

function Details(id) {
  let clickId = id;
  const { songsData, playlistsData, albumsData, artistsData } =
    useContext(APIContext);
  const [song, setSong] = useState([{id: 1, genre: 'hiphop', songname: 'test'}]) 
    if (typeof songsData !== "object") {
    console.log("error");
    } else {
    console.log(songsData);
  }  
  function set(clickId){
      for(let item of songsData) {
        if(item.id == id) {
          setSong(item)
        }
      }
    }
    set()
  return (
    <>
      {song.id}
    </>
  );
}

export default Details;
