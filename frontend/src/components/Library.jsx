import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { APIContext } from "./Context";
import NavBar from "./NavBar";
import Details from "./Details";
import GenreList from "./GenreList";
import AlbumCard from "./AlbumCard";
import "../CSS/Library.css";

function Library() {
  const { songsData } = useContext(APIContext);
  const [id, setId] = useState(1)


  if (typeof songsData !== "object") {
    console.log("error");
  } else {
    console.log(songsData);
    setId(songsData.id);
  }

const [data, setData] = useState(null);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/songs`);
      if(!response.ok) throw new Error('Failed ');
      const result = await response.json();
      setData(result);      
    } catch (err){
      navigate('/error')
    }
  }
  fetchData()
}, [data])

if(!data) return <h1>Loading...</h1>;
  return (
    <>
      <h1>details</h1>
      <button onClick={() => navigate('/new', {state: {songData: data}})}>
        seeSongDetails
      </button>
    </>
  );
}

export default Library;
