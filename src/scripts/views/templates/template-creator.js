import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => /*html*/ `
<article class="card-items">
<img class="card-items-header" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" />
 <div class="card-items-content">
   <p class="card-text-city">${restaurant.city}<span class="card-text-rating">${restaurant.rating}</span></p>
   <h3 class="card-text-title">
     ${restaurant.name}
   </h3>
   <p class="card-text-description">
   ${restaurant.description}
   </p>
   <a href="#/detail/${restaurant.id}">
   <button class="card-items-button">Read More</button>
   </a>
 </div>
 </article>
`;

const createRestaurantDetailTemplate = (restaurant) => {
	const menus = restaurant.menus;
	const {
		drinks,
		drinks: { name },
	} = menus;
	const menuDrinks = document.querySelector(".li-drinks");
	drinks.forEach((d) => {
		console.log(d.name);
		// menuDrinks.innerHTML = "${d.name}";
	});
	return /*html*/ `
				<div class="detail-image"><img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" /></div>
				<div class="text-detail">
					<h3>Title :</h3>
					<p>${restaurant.name}</p>
					<h3>Address :</h3>
					<p>${restaurant.address}</p>
					<h3>City : </h3>
					<p>${restaurant.city}</p>
					<h3>Description : </h3>
					<p>${restaurant.description}</p>
				</div>
				<div class="menu-drinks">
				<h2>Menu Drinks</h2>
				<ul>
					<li class="li-drinks"></li>
				</ul>
			</div>
			<div class="menu-foods">
				<h2>Menu Foods</h2>
				<ul>
				<li class="foods">${restaurant.name}</li>
				</ul>
			</div>
		</div>
		<div class="reviews">
			<h3>Name :</h3>
			<p>Lorem ipsum dolor sit.</p>
			<h3>Review :</h3>
			<p>Lorem ipsum dolor sit.</p>
			<h3>Date :</h3>
			<p>Lorem ipsum dolor sit.</p>
		</div>

	`;
};

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
