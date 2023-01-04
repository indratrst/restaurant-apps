// import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
// import { listRestaurant } from '../templates/template-creator';
// import FavoriteRestaurantShowPresenter from './liked-Restaurant/favorite-restaurant-show-presenter';


// const Favorite = {
//   async render() {
//     return `

//     <div class="breaker">
// <h2 class="text">Picturesque Shutter <br />Resto Favorite</h2></div>
//     <div class="card" id="main-favorite" tabindex="0">
//   </div>
//     `;
//   },

//   async afterRender() {
    
//     const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
//     const restaurantContainer = document.querySelector('#main-favorite');
    
//     restaurant.forEach((data) => {
//       restaurantContainer.innerHTML += listRestaurant(data);
//     });
//     new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
//   },
// };

// export default Favorite;

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-Restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-Restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
  },
};

export default Favorite;

