import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { APIContext } from "./Context";
import NavBar from "./NavBar";
import Details from "./Details";
import SideBar from "./SideBar";
import AlbumCard from "./AlbumCard";
import "../CSS/Library.css";

function Library() {
  const { songsData } = useContext(APIContext);
  const navigate = useNavigate()

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3001/api/songs`);
//       if(!response.ok) throw new Error('Failed ');
//       const result = await response.json();
//       setData(result);
//     } catch (err){
//       navigate('/error')
//     }
//   }
//   fetchData()
// }, [data])

  function handleNavigate(id) {
    navigate(`/Details/${id}`)
  }
  return (
    <>
      <header className="header">
        <h1>STOPIFY</h1>
        <NavBar />
      </header>
      <div>
        <main>
          <div id="sidebar">
            <SideBar />
          </div>
          <div id="compnent-container">
            {songsData.map(song => <div key={song.id} onClick={() => handleNavigate(song.id)}>{song.songname}</div>)}
          </div>
        </main>
        <footer className="footer">
          &copy; 2025 STOPIFY. All rights reserved.
        </footer>
      </div>

    </>
  );
}

export default Library;
