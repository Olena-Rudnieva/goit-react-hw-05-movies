import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/collection">Collection</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/collection" element={<div>Collection</div>} />
      </Routes>
    </div>
  );
};
