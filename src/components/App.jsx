import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotFound from 'pages/NotFound';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":movieId" element={<MoviesDetails />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
