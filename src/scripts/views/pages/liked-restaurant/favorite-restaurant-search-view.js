import { listRestaurant } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
     
      <div class="breaker">
<h2 class="text">Picturesque Shutter <br />Resto Favorite</h2></div>
<div class="card" id="main-favorite" tabindex="0">
</div>
`;
}
// <input id="query" type="text">

  // runWhenUserIsSearching(callback) {
  //   document.getElementById('query').addEventListener('change', (event) => {
  //     callback(event.target.value);
  //   });
  // }

  showRestaurant(restaurant) {
    this.showFavoriteRestaurant(restaurant);
  }

  showFavoriteRestaurant(restaurant = []) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, restaurant) => carry.concat(listRestaurant(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('main-favorite').innerHTML = html;

    document.getElementById('main-favorite').dispatchEvent(new Event('main-favorite:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurant__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
