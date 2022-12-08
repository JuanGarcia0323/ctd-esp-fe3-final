import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/links";
const favs = JSON.parse(localStorage.getItem("favorites")) || [];

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, [id]);

  const handleFavs = () => {
    setIsFav(!isFav)
    const cleanedFavs = favs.filter(fav => fav.id !== id)
    const newFavs = [...cleanedFavs, { name, username, id }]
    localStorage.setItem('favorites', JSON.stringify(newFavs))
  }

  return (
    <div className="card">
      <Link to={`${links.dentista.path}/${id}`}>
        <img src="./images/doctora.jpg" alt={username} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={handleFavs} className="favButton">
        <span className={`material-symbols-outlined ${isFav ? "fav" : ""}`}>
          favorite
        </span>
        {`${!isFav ? "Add to fav" : "Remove from fav"}`}
      </button>
    </div>
  );
};

export default Card;
