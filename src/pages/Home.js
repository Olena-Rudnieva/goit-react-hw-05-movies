import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchHomeMovies } from 'services/api-service';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchHomeMovies()
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
      <h1>Trending today</h1>
      {loading && <div>Loading...</div>}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
