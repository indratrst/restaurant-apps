import HomePage from "../views/pages/home-page";
// import Upcoming from "../views/pages/favourite";
import Detail from "../views/pages/detail";
import Like from "../views/pages/like";

const routes = {
	"/": HomePage, // default page
	// "/favorite": Favorite,
	"/detail/:id": Detail,
	"/like": Like,
};

export default routes;
