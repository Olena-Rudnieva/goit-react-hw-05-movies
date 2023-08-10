import React from 'react';

const MoviesList = movies => {
  return (
    <div>
      <ul>
        {movies.map(({ title }) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
