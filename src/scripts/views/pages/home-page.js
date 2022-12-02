import restaurantDataSource from "../../data/restaurantdata-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const HomePage = {
	async render() {
		return `
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
