import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Like = {
	async render() {
		return `
    <div class="breaker">
		<h2 class="text">Picturesque Shutter <br />Resto Favorite</h2>
	</div>
    <div class="card" id="mainContent">
  	</div>
    `;
	},

	async afterRender() {
		const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
		const restaurantContainer = document.querySelector("#mainContent");

		restaurant.forEach((restaurant) => {
			restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
		});
	},
};

export default Like;
