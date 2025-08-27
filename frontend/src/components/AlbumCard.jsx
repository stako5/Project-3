import "../CSS/AlbumCard.css";
import { useContext } from "react";
import { APIContext } from "./Context";

function AlbumCard() {
  const { albumsData } = useContext(APIContext);

  console.log(albumsData);
  return (
    <>
      {albumsData && albumsData.length > 0 ? (
        <ul>
          {albumsData.map((album) => (
            <li key={album.id}>
              <label>{album.name}</label>
            </li>
          ))}
        </ul>
      ) : (
        <div>No albums to display.</div>
      )}
    </>
  );
}

export default AlbumCard;
