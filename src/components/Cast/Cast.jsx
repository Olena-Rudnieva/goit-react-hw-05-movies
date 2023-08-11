import { useEffect, useState } from 'react';
// import { useRef } from 'react';
import { useParams } from 'react-router-dom';
// import getAPI from 'services/api-service';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const fetchCast = ({ movieId }) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    })
      .then(response => response.json())
      .then(responseCast => responseCast.cast);
  };

  useEffect(() => {
    if (movieId === '') return;
    fetchCast({ movieId })
      .then(data => {
        setCast(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  //   const location = useLocation();
  //   const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // const { movieId } = useParams();

  //   console.log(location);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {cast && (
        <div>
          <ul>
            {cast?.map(actor => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? [
                          `https://image.tmdb.org/t/p/w500/${actor.profile_path}`,
                        ]
                      : defaultImg
                  }
                  width={250}
                  alt="poster"
                />

                <p>{actor.name}</p>

                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cast;
