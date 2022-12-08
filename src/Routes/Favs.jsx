import Card from "../Components/Card";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const favs = JSON.parse(localStorage.getItem("favorites")) || [];

const Favs = () => {
  const { theme } = useEstadosGlobalesContext();

  const handleFavs = () => {
    newFavs = favs.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  return (
    <div className={theme.color}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))
        ) : (
          <p>No hay favoritos</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
