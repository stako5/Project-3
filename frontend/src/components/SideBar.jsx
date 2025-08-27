import { useContext } from "react";
import "../CSS/SideBar.css";
import AlbumCard from "./AlbumCard.jsx";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function SideBar() {
  const navigate = useNavigate("");

  return (
    <div className="side-section">
      <aside>
        <Card onClick={() => navigate("/Albums")}>Albums</Card>
        <Card onClick={() => navigate("/Artists")}>Artist</Card>
        <Card onClick={() => navigate("/Songs")}>Songs</Card>
        <Card onClick={() => navigate("/Genre")}>Genre</Card>
      </aside>
    </div>
  );
}

export default SideBar;
