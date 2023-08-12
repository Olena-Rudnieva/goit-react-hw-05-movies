import MoviesList from 'components/MoviesList/MoviesList';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query') ?? '';

  const fetchMovies = query => {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    })
      .then(response => response.json())
      .then(responseMovies => responseMovies.results);
  };

  useEffect(() => {
    if (queryString === '') return;

    fetchMovies(queryString)
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.log(error));
  }, [queryString]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchValue.value;
    console.log(searchValue);
    setSearchParams({
      query: searchValue,
    });

    const searchField = e.currentTarget;

    searchField.reset();
  };

  return (
    <>
      <MoviesSearchForm queryString={queryString} onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
