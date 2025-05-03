import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';
import { fetchMoviesDetails } from '../../util/api';
import FavoriteButton from '../../Components/Button/FavouriteButton';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMoviesDetails(id);
      setMovie(movieDetails);
    };

    getMovieDetails();
  }, [id]);

  if (!movie) return <div className="container center">Loading...</div>;

  return (
    <div className="container-movie">
      <div className="card">
        <img
          className="card-img"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="card-content">
          <h1 className="card-title">{movie.Title}</h1>
          <p className="card-subtitle">{movie.Genre}</p>
          <p className="card-description">{movie.Plot}</p>
          <div>
            <strong>Director:</strong>
            <p>{movie.Director}</p>
          </div>
          <div>
            <strong>Ratings:</strong>
            <p>{movie.imdbRating}</p>
          </div>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
