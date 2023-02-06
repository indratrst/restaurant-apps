import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { listRestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `

    <div class="breaker">
<h2 class="text">Picturesque Shutter <br />Resto Favorite</h2></div>
    <div class="card" id="main-favorite" tabindex="0">
  </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#main-favorite');

    if (restaurant.length < 1) {
      restaurantContainer
        .innerHTML = '<h4>Tidak ada data restaurant yang ditampilkan</h4>';
    } else {
      restaurant.forEach((data) => {
        restaurantContainer.innerHTML += listRestaurant(data);
      });
    }
  },
};

export default Favorite;
