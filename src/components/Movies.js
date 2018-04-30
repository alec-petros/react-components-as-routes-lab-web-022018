import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesArr = movies.map(movie => {
    return (
      <div>
        <h3>{movie.title}</h3>
        <h5>{movie.time}</h5>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesArr}
    </div>
  );
};

export default Movies;
