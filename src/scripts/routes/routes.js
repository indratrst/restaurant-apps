import HomePage from '../views/pages/home-page';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  // '/': HomePage, // default page
  '/home-page': HomePage,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
