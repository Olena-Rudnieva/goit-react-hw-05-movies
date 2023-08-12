import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, List, StyledLink } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies?.map(movie => {
          return (
            <Item key={movie.id}>
              <StyledLink state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </StyledLink>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
