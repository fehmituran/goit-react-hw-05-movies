import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy} from "react";

export const App = () => {

  const Home = lazy(() => import("../pages/Home/Home"));
  const Movies = lazy(() => import("../pages/Movies/Movies"));
  const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
  const Cast = lazy(() => import("./Cast/Cast"));
  const Reviews = lazy(() => import("./Reviews/Reviews"));
  const NotFound = lazy(() => import("./NotFound/NotFound"));

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
