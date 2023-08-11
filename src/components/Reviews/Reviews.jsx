import { useEffect, useState } from 'react';
// import { useRef } from 'react';
import { useParams } from 'react-router-dom';
// import getAPI from 'services/api-service';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = ({ movieId }) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0',
      },
    })
      .then(response => response.json())
      .then(responseReviews => responseReviews.results);
  };

  useEffect(() => {
    if (movieId === '') return;
    fetchReviews({ movieId })
      .then(data => {
        console.log(data);
        setReviews(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  //   const location = useLocation();
  //   const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // const { movieId } = useParams();

  //   console.log(location);

  return (
    <div>
      {reviews ? (
        <div>
          <ul>
            {reviews?.map(review => (
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
