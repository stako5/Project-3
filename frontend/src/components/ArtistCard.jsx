import { useContext } from "react";
import { APIContext } from "./Context";

function ArtistCard() {
  const { artistsData } = useContext(APIContext);

  console.log(artistsData);
  return (
    <>
      {artistsData && artistsData.length > 0 ? (
        <ul>
          {artistsData.map((artist) => (
            <li key={artist.id}>
              <label>{artist.name}</label>
            </li>
          ))}
        </ul>
      ) : (
        <div>No artists to display.</div>
      )}
    </>
  );
}

export default ArtistCard;
