import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    return fetch('https://api.themoviedb.org/3/trending/movie/day', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchMovies()
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Please try again!'));
      })
      .then(selectedMovies => setMovies(selectedMovies.results))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {error && <h1>Please try again!</h1>}
      {loading && <div>Loading...</div>}
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
