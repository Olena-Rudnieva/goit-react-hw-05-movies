const BASE_URL = 'https://api.themoviedb.org/movie/2';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0';

const getAPI = () => {
  return fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
};
// const getAPI = () => {
//   const params = new URLSearchParams({
//     key: API_KEY,
//     // q: q,
//     // image_type: 'photo',
//     // orientation: 'horizontal',
//     // safesearch: true,
//     // per_page: 12,
//     // page: page,
//   });
//   return fetch(`${BASE_URL}?${params}`);
// };

export default getAPI;
