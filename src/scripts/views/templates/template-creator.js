import CONFIG from '../../globals/config';

const listRestaurant = (restaurant) =>/* html */ `
<article class="card-items">
<img class="card-items-header lazyload" data-src="${CONFIG.BASE_IMAGE_URL_S + restaurant.pictureId}" alt="${restaurant.title}" />
 <div class="card-items-content">
   <p class="card-text-city">${restaurant.city}<span class="card-text-rating">${restaurant.rating}</span></p>
   <h3 class="card-text-title">
     ${restaurant.name}
   </h3>
   <p class="card-text-description">
   ${restaurant.description}
   </p>
   
   <button class="card-items-button"><a href="#/detail/${restaurant.id}">Detail</a></button>
   

 </div>
 </article>
`;
const detailRestaurant = (restaurant) => /* html */ `
<div class="container-detail">
				<div class="wrapping-detail">
					<div class="image-detail"><img data-src="${CONFIG.BASE_IMAGE_URL_L + restaurant.pictureId}" alt="${restaurant.title}" /></div>
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
				 </div>

								<div class="menus">
								<div class="menu-drinks">
										<h2>Menu Drinks</h2>
										<ul>
									${restaurant.menus.drinks.map((drink) => /* html */ `<li>${drink.name}</li>`).join('')}
										</ul>
								</div>
								<div class="menu-foods">
										<h2>Menu Foods</h2>
										<ul>
									${restaurant.menus.foods.map((food) => /* html */ `<li>${food.name}</li>`).join('')}
										</ul>
								</div>
</div>
				<section class="user-review">
				<h2>Review</h2>
				<div class="reviews">
				${restaurant.customerReviews
    .map(
      (data) => /* html */ `
					<div class="container-card-review">
						<div class="card-review">
							<div class="wrap-review">
								<h3>
									<b>${data.name}</b>
								</h3>
								<h4>Date: ${data.date}</h4>
							</div>
							<p>
								<strong> Review :</strong> <br />
								${data.review}
							</p>
						</div>
					</div>
				`,
    )
    .join('')}
					</section>
								</div>
						`;

const createLikeRestaurantButtonTemplate = () => /* html */ `
						<button aria-label="like this restaurant" id="likeButton" class="like">
							<i class="fa-regular fa-thumbs-up" aria-hidden="true"></i>
						</button>
					`;

const createUnlikeRestaurantButtonTemplate = () => /* html */ `
						<button aria-label="unlike this restaurant" id="likeButton" class="like">
							<i class="fa-solid fa-thumbs-up" aria-hidden="true"></i>
						</button>
					`;

export {
  listRestaurant,
  detailRestaurant,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
