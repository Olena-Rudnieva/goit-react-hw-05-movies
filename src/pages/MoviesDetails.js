// import { useEffect } from 'react';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import getAPI from 'services/api-service';

const MoviesDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // const { movieId } = useParams();

  console.log(location);

  // useEffect =
  //   (() => {
  //     getAPI()
  //       .then(response => response.json)
  //       .then(data => console.log(data));
  //   },
  //   []);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
    </div>
  );
};

export default MoviesDetails;
