import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemove = (imdbID) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== imdbID);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="container">
      <h1 className="header">My Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p className="empty-state">You haven't added any favorites yet.</p>
      ) : (
        <div className="grid">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="card">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-title">{movie.Title}</h3>
                <p className="card-subtitle">{movie.Year}</p>
                <div className='flex flex-col gap-3'>
                <Link to={`/movie/${movie.imdbID}`} className="card-link">
                  View Details
                </Link>
                <button
                  onClick={() => handleRemove(movie.imdbID)}
                  className="button-danger"
                >
                  Remove from Favorites
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
