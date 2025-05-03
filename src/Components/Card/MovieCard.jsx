import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../Button/FavouriteButton';

const MovieCard = ({ movie }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
      style={{ animation: `fadeIn 0.3s ease-in-out` }}
    >
      <div className="overflow-hidden">
        <img
          className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/300x450?text=No+Image'
          }
          alt={movie.Title}
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-48">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.Title}</h3>
          <p className="text-sm text-gray-500">{movie.Year}</p>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Link
            to={`/movie/${movie.imdbID}`}
            className="text-blue-600 font-medium text-sm hover:underline"
          >
            🎬 More Info
          </Link>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
