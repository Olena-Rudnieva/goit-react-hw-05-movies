// import MoviesList from 'components/MoviesList/MoviesList';
import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import { useState, useEffect } from 'react';
// import { Link, useSearchParams, useLocation } from 'react-router-dom';
// import getAPI from 'services/api-service';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   const location = useLocation();
//   console.log(location);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieTitle = searchParams.get('movieTitle') ?? '';
//   const selectedMovies = movies.filter(movie => movie.includes(movieTitle));
//   const updateQueryString = evt =>
//     evt.target.value !== ''
//       ? setSearchParams({ movieTitle: evt.target.value })
//       : setSearchParams({});

//   console.log(movieTitle);

//   // getAPI(movieTitle)
//   //   .then(response => console.log(response.json()))
//   //   .then(data => console.log(data));

//   useEffect(() => {
//     if (movieTitle === '') return;
//     getAPI(movieTitle)
//       .then(response => response.json())
//       .then(data => console.log(data));
//   }, [movieTitle]);

//   return (
//     <div>
//       <form>
//         <input type="text" value={movieTitle} onChange={updateQueryString} />
//         <button onClick={() => setSearchParams({})}>Search</button>
//       </form>
//       {selectedMovies.map(movie => {
//         console.log(movie);
//         return (
//           <Link key={movie} to={`${movie}`} state={{ from: location }}>
//             {movie}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = ({ query }) => {
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
    if (query === '') return;
    fetchMovies({ query })
      .then(selectedMovies => setMovies(selectedMovies))
      .catch(error => console.log(error));
  }, [query]);

  const onChangeQuery = query => {
    setQuery(query);
    setMovies([]);
  };

  return (
    <>
      <MoviesSearchForm onSubmit={onChangeQuery} />
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {/* <MoviesList movies={movies} /> */}
    </>
  );
};
export default Movies;
