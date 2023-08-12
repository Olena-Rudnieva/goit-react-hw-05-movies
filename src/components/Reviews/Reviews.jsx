import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const fetchReviews = ({ movieId }) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    });
  };

  useEffect(() => {
    if (movieId === '') return;
    setLoading(true);
    fetchReviews({ movieId })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Please try again!'));
      })
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div>
      {error && <h1>Please try again!</h1>}
      {loading && <div>Loading...</div>}
      {reviews.length > 0 ? (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </div>
  );
};

export default Reviews;
