import MoviesList from 'components/MoviesList/MoviesList';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query') ?? '';

  const fetchMovies = query => {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    });
  };

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
      {loading && <div>Loading...</div>}
      <MoviesSearchForm queryString={queryString} onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
