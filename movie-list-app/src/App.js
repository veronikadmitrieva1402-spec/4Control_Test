import React, { useState } from 'react';
import { moviesData } from './data/movies';
import './App.css';

function App() {
  const [movies, setMovies] = useState(moviesData);

  const toggleFavorite = (movieId) => {
    setMovies(movies.map(movie => 
      movie.id === movieId 
        ? { ...movie, isFavorite: !movie.isFavorite }
        : movie
    ));
  };

  return (
    <div className="app">
      <h1>Список фильмов</h1>
      
      <div className="movies-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title} ({movie.year})</h2>
            <p><strong>Режиссер:</strong> {movie.director}</p>
            <p><strong>Жанр:</strong> {movie.genre}</p>
            <p><strong>Рейтинг:</strong>{movie.rating}</p>
            <p>{movie.description}</p>
            
            <button 
              className={movie.isFavorite ? 'favorite active' : 'favorite'}
              onClick={() => toggleFavorite(movie.id)}
            >
              {movie.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;