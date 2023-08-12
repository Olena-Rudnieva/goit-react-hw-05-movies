import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api-service';
import {
  AddLink,
  AddTitle,
  AddWrapper,
  GenresList,
  StyledLink,
  Subtitle,
  Title,
  Wrapper,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (movieId === '') return;
    setLoading(true);
    fetchMovie({ movieId })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Please try again!'));
      })
      .then(selectedMovie => {
        setMovie(selectedMovie);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {error && <h1>Please try again!</h1>}
      {loading && <div>Loading...</div>}
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
      {movie && (
        <Wrapper>
          <img
            src={
              movie.poster_path
                ? [`https://image.tmdb.org/t/p/w500/${movie.poster_path}`]
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <Title>{movie.title}</Title>
            <p>User Score: {((movie.vote_average * 1000) / 100).toFixed()}%</p>
            <Subtitle>Overview</Subtitle>
            <p>{movie.overview}</p>
            <Subtitle>Genres</Subtitle>
            <GenresList>
              {movie.genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </GenresList>
          </div>
        </Wrapper>
      )}
      <AddWrapper>
        <AddTitle>Additional information</AddTitle>
        <AddLink to="cast">Cast</AddLink>
        <AddLink to="reviews">Reviews</AddLink>
        <Outlet />
      </AddWrapper>
    </div>
  );
};

export default MoviesDetails;
