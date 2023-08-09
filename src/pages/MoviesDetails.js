// import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import getAPI from 'services/api-service';

const MoviesDetails = () => {
  const location = useLocation();
  // const { movieId } = useParams();

  console.log(location.state.from);

  // useEffect =
  //   (() => {
  //     getAPI()
  //       .then(response => response.json)
  //       .then(data => console.log(data));
  //   },
  //   []);

  return (
    <div>
      <Link>Go back</Link>
    </div>
  );
};

export default MoviesDetails;
