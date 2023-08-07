import Collection from 'pages/Collection';
import FilmDetails from 'pages/FilmDetails';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="collection/:filmId" element={<FilmDetails />} />
      </Route>
    </Routes>
  );
};
