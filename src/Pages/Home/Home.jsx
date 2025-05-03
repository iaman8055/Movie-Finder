import React, { useState } from 'react';
import { fetchMovies } from '../../util/api';
import MovieCard from '../../Components/Card/MovieCard';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const movieResults = await fetchMovies(searchTerm);
    setMovies(movieResults);
  };

  return (
    <div className="container-movie">
      <h1 className="header">Welcome to Movie Finder</h1>
      <div className="input-group">
        <input
          type="text"
          className="search-input"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="search-button"
        >
          Search
        </button>
      </div>

      <div className="grid-movie">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
