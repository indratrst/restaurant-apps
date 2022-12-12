import HomePage from '../views/pages/home-page';
// import Upcoming from "../views/pages/favourite";
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': HomePage, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
