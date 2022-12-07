import restaurantDataSource from "../../data/restaurantdata-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const HomePage = {
	async render() {
		return `
		<div class="breaker">
		<h2 class="text">Picturesque Shutter <br />Resto List</h2>
	</div>
    <div class="card" id="mainContent">
  	</div>
    `;
	},

	async afterRender() {
		const restaurant = await restaurantDataSource.homePage();
		const restaurantContainer = document.querySelector("#mainContent");
		restaurant.forEach((resto) => {
			restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
		});
	},
};

export default HomePage;
