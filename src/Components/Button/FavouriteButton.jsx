import React from 'react';

const FavoriteButton = ({ movie }) => {
  const handleSaveFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!savedFavorites.some((m) => m.imdbID === movie.imdbID)) {
      savedFavorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    }
  };

  return (
    <button
      onClick={handleSaveFavorite}
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-4"
    >
      Save to Favorites
    </button>
  );
};

export default FavoriteButton;
