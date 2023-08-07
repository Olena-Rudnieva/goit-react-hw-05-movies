import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/collection">Collection</NavLink>
      </nav>
    </div>
  );
};

export default Layout;
