import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
// import getAPI from 'services/api-service';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    return fetch('https://api.themoviedb.org/3/trending/movie/day', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    })
      .then(response => response.json())
      .then(responseMovies => responseMovies.results);
  };

  useEffect(() => {
    fetchMovies().then(selectedMovies => setMovies(selectedMovies));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
