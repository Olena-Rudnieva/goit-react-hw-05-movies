import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>404 Ooops, page not found!</p>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFound;
