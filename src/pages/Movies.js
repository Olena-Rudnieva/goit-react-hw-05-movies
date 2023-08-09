import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie - 1 ',
    'movie - 2 ',
    'movie - 3 ',
  ]);

  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('movieTitle') ?? '';
  const selectedMovies = movies.filter(movie => movie.includes(movieTitle));
  const updateQueryString = evt =>
    evt.target.value !== ''
      ? setSearchParams({ movieTitle: evt.target.value })
      : setSearchParams({});

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParams}`, {
  //     headers: {
  //       Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0`,
  //     },
  //   })
  //     .then(response => response.json)
  //     .then(data => console.log(data));
  // }, [movieTitle, searchParams]);

  return (
    <div>
      <form>
        <input type="text" value={movieTitle} onChange={updateQueryString} />
        <button onClick={() => setSearchParams({})}>Search</button>
      </form>
      {selectedMovies.map(movie => {
        return (
          <Link key={movie} to={`${movie}`} state={{ from: location }}>
            {movie}
          </Link>
        );
      })}
    </div>
  );

  // return (
  //   <div>
  //     <h2>Movies collection</h2>
  //     {['movie - 1 ', 'movie - 2 ', 'movie - 3 '].map(movie => {
  //       return (
  //         <Link key={movie} to={`${movie}`}>
  //           {movie}
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );
};

export default Movies;
