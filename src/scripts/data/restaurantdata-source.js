import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantDataSource {
	static async homePage() {
		const response = await fetch(API_ENDPOINT.HOMEPAGE);
		const responseJson = await response.json();
		return responseJson.restaurants;
	}

	// static async upcomingMovies() {
	//   const response = await fetch(API_ENDPOINT.UPCOMING);
	//   const responseJson = await response.json();
	//   return responseJson.results;
	// }

	static async detailRestaurant(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		const responseJson = await response.json();
		return responseJson.restaurant;
	}

	static async menusRestaurant(id) {
		const response = await fetch(API_ENDPOINT.DETAIL(id));
		const responseJson = await response.json();
		return responseJson.restaurant.menus;
	}
}

export default RestaurantDataSource;
