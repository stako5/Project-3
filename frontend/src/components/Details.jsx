import { useContext, useState, useEffect } from "react";
import { APIContext } from "./Context";
import { useParams } from "react-router-dom"
import NavBar from "./NavBar";

function Details() {
  const { id } = useParams()
  const { songsData, artistsData } = useContext(APIContext);
  const [data, setData] = useState([{id: 0}])
  const [data1, setData1] = useState([{id: 0}])
  var song = songsData.filter(song => song.id == id)
  var artist = artistsData.filter(artist => artist.id == id)

  // useEffect(()=> {
  //   for ( let i = 0; i <= songsData.length; i++ ) {
  //     if (songsData[i].id === value ) {
  //       setData(song)
  //     }
  //   }
  // }, [])
  useEffect(() => {
    setData(song)
    console.log(song)
    setData1(artist)
  },[])
  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <main>
        <h1>{data[0].songname}</h1>
        <img src={`${data[0].cover_art}`} alt={`${data[0].songname}`} height='400px' width='400' />
        <p>Release Date: {data[0].release_date}</p>
        <p>{data1[0].name}</p>
        <p>Bio: {data1[0].bio}</p>

      </main>
      <footer className="footer">
        &copy; 2025 STOPIFY. All rights reserved.
      </footer>
    </>
  );
}

export default Details;
