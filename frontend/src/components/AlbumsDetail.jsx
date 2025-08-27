import { useContext, useState, useEffect } from "react";
import { APIContext } from "./Context";
import { useParams, Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "../CSS/Details.css";

function AlbumsDetails() {
  const { id } = useParams();
  const { albumsData, songsData, artistsData } = useContext(APIContext);
  const [data, setData] = useState([{ id: 0 }]);
  const [data1, setData1] = useState([{ id: 0 }]);
  const [data2, setData2] = useState([{ id: 0 }]);
  const navigate = useNavigate();
  var song = songsData.filter((song) => song.id == id);
  var artist = artistsData.filter((artist) => artist.id == id);
  var album = albumsData.filter((album) => album.id == id);

  useEffect(() => {
    setData(album);
    setData2(song);
    setData1(artist);
  }, []);
  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <main className="details-main">
        <h1>{data[0].songname}</h1>
        <img
          src={`${data[0].cover_art}`}
          alt={`${data[0].songname}`}
          height="400px"
          width="400"
        />
        <p>Release Date: {data[0].release_date}</p>
        <p>{data[0].name}</p>
        <p>Bio: {data1[0].bio}</p>
        {/* <Link to='/Library'><button>Go Back</button></Link> */}
        <button onClick={() => navigate("/Albums")}>Go Back</button>
      </main>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default AlbumsDetails;
