import UrlParser from "../../routes/url-parser";
import restaurantDataSource from "../../data/restaurantdata-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
	async render() {
		return `
		<div class="breaker">
		<h2 class="text">Picturesque Shutter <br />Resto Detail</h2>
	</div>
    <div class="container-upper">
		</div>
		<div id="likeButtonContainer"></div>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await restaurantDataSource.detailRestaurant(url.id);
		const restaurantContainer = document.querySelector(".container-upper");
		restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

		LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector("#likeButtonContainer"),
			restaurant: {
				id: restaurant.id,
				pictureId: restaurant.pictureId,
				name: restaurant.name,
				rating: restaurant.rating,
				description: restaurant.description,
				address: restaurant.address,
				city: restaurant.city,
			},
		});
	},
};

export default Detail;
