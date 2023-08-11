import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
