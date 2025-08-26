import { createContext, useState, useEffect } from "react";

export const APIContext = createContext();

export default function APIProvider({ children }) {
  const [songsData, setSongsData] = useState(null);
  const [playlistsData, setPlaylistsData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [albumsData, setAlbumsData] = useState(null);
  const [artistsData, setArtistsData] = useState(null);

    useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/songs`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(songsData);
        setSongsData(data);
      } catch (err) {
        console.error("Failed to fetch songs:", err);
      }
    };

    fetchSongs();
    }, []);

    useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/playlists`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setPlaylistsData(data);
      } catch (err) {
        console.error("Failed to fetch songs:", err);
      }
    };

    fetchPlaylists();
    }, []);

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setUsersData(data);
      } catch (err) {
        console.error("Failed to fetch songs:", err);
      }
    };

    fetchUsers();
    }, []);

    useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/albums`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setAlbumsData(data);
      } catch (err) {
        console.error("Failed to fetch songs:", err);
      }
    };

    fetchAlbums();
    }, []);

    useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/artists`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setArtistsData(data);
      } catch (err) {
        console.error("Failed to fetch songs:", err);
      }
    };

    fetchArtists();
  }, []);

  return (
    <APIContext.Provider value={{songsData, playlistsData, usersData, albumsData, artistsData }}>
      {children}
    </APIContext.Provider>
  );
}




  // useEffect(async () => {
  //   await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/songs`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setApiData(data);
  //     })
  //     .catch(console.error(err));
  // }, []);
  // return <APIContext.Provider value={apiData}>{children}</APIContext.Provider>;