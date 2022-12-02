import UrlParser from "../../routes/url-parser";
import restaurantDataSource from "../../data/restaurantdata-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
	async render() {
		return `
    <div class="container-detail">
		</div>
    `;
	},

	async afterRender() {
		const url = UrlParser.parseActiveUrlWithoutCombiner();
		const restaurant = await restaurantDataSource.detailRestaurant(url.id);
		const restaurantContainer = document.querySelector(".container-detail");
		restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
	},
};

export default Detail;
