import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
