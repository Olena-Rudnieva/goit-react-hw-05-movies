import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const fetchMovie = ({ movieId }) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    });
  };

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
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? [`https://image.tmdb.org/t/p/w500/${movie.poster_path}`]
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <h2>{movie.title}</h2>
          <p>User Score:{((movie.vote_average * 1000) / 100).toFixed()}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
