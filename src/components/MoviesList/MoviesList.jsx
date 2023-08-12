import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <ul>
        {movies?.map(movie => {
          return (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
