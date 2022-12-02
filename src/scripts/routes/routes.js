import HomePage from "../views/pages/home-page";
// import Upcoming from "../views/pages/favourite";
import Detail from "../views/pages/detail";

const routes = {
	"/": HomePage, // default page
	// "/favorite": Favorite,
	"/detail/:id": Detail,
};

export default routes;
