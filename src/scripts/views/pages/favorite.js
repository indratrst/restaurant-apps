import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { listRestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="breaker">
<h2 class="text">Picturesque Shutter <br />Resto Favorite</h2></div>
    <div class="card" id="mainContent">
  </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#mainContent');

    restaurant.forEach((data) => {
      restaurantContainer.innerHTML += listRestaurant(data);
    });
  },
};

export default Favorite;
