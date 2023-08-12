import MoviesList from 'components/MoviesList/MoviesList';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/api-service';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryString === '') return;

    fetchMovies(queryString)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Please try again!'));
      })
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [queryString]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchValue.value;
    setSearchParams({
      query: searchValue,
    });
    setLoading(true);
    setError(null);
    const searchField = e.currentTarget;
    searchField.reset();
  };

  return (
    <>
      {error && <h1>Please try again!</h1>}
      <MoviesSearchForm queryString={queryString} onSubmit={handleSubmit} />
      {loading && <div>Loading...</div>}
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
