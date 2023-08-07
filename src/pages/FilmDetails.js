// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilmDetails = () => {
  const { filmId } = useParams();
  console.log(filmId);
  //     useEffect = (() => {
  //       HTTP запрос
  //   }, []);

  return <div>Film Details</div>;
};

export default FilmDetails;
