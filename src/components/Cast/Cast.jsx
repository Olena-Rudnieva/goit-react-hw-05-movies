import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api-service';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === '') return;
    setLoading(true);
    fetchCast({ movieId })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Please try again!'));
      })
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {error && <h1>Please try again!</h1>}
      {loading && <div>Loading...</div>}
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
