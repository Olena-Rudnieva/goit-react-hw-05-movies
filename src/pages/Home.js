import { useState, useEffect } from 'react';
import getAPI from 'services/api-service';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect =
    (() => {
      //   getAPI()
      //     .then(response => {
      //       if (response.ok) {
      //         return response.json();
      //       }
      //       return Promise.reject(new Error('Please try again!'));
      //     })
      //     .then(data => {
      //       setMovies(data);
      //       // setPhotos(prevState => [...prevState, ...data.hits]);
      //     });
    },
    [movies]);

  // const Movies = () => {
  //   return (
  //     <div>
  //       <h2>Movies collection</h2>
  //       {['movie - 1 ', 'movie - 2 ', 'movie - 3 '].map(movie => {
  //         return (
  //           <Link key={movie} to={`${movie}`}>
  //             {movie}
  //           </Link>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  return (
    <div>
      <h1>Trending today</h1>
      {/* <ul>
        {movies.map(movie => (
          <li>{movie.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
