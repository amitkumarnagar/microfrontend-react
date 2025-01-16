import React from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/List";
import useAlbums from "../hooks/useAlbums";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { getFavorites } = useAlbums();

  const favorites = getFavorites();

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/app1/list")}>Go to List</button>
      <div className="favorites">
        <h3>Favorites</h3>
        {favorites?.length ? <List photos={favorites} /> : <p className="message">No Favorites yet</p>}
      </div>
    </div>
  );
};

export default Dashboard;
