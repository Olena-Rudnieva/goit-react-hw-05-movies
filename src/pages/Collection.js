import { Link } from 'react-router-dom';

const Collection = () => {
  return (
    <div>
      <h2>Films collection</h2>
      {['film - 1 ', 'film - 2 ', 'film - 3 '].map(film => {
        return (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        );
      })}
    </div>
  );
};

export default Collection;
