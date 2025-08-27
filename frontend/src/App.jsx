import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { APIContext } from "./components/Context";
import Library from "./components/Library";
import Login from "./components/Login";
import Playlist from "./components/Playlist";
import Home from "./components/Home";
import APIProvider from "./components/Context.jsx";
import Details from "./components/Details.jsx";
import AlbumCard from "./components/AlbumCard.jsx";
import ArtistCard from "./components/ArtistCard.jsx";
import GenreList from "./components/GenreList.jsx";
import SongsCard from "./components/SongsCard.jsx";

function App() {
  const { songsData, playlistsData, usersData, albumsData, artistsData } =
    useContext(APIContext);
  if (
    !songsData ||
    !playlistsData ||
    !usersData ||
    !albumsData ||
    !artistsData
  ) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <APIProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Playlist" element={<Playlist />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Details/:id" element={<Details />} />
            <Route path="/Albums" element={<AlbumCard />} />
            <Route path="/Artists" element={<ArtistCard />} />
            <Route path="/Genre" element={<GenreList />} />
            <Route path="/Songs" element={<SongsCard />} />
          </Routes>
        </APIProvider>
      </>
    );
  }
}

export default App;
