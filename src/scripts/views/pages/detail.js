import UrlParser from '../../routes/url-parser';
import restaurantDataSource from '../../data/restaurantdata-source';
import { detailRestaurant } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReview from '../../utils/reviewer-post';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import loader from '../templates/loader';

const Detail = {
  async render() {
    return /* html */`

  <div class="breaker">
  <h2 class="text">Picturesque Shutter Resto Detail</h2>
  <div id="loading">
  
  </div>
  </div>
  <div class="container-detail" id="container-detail" tabindex="0">
  
  </div>
  
  <div id="likeButtonContainer"></div>

  `;
  },

  async afterRender() {
    // lazy load font awesome
    let scriptElement = document.querySelector(
      'script[src="https://kit.fontawesome.com/28990b5acb.js"]',
    );

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.src = 'https://kit.fontawesome.com/28990b5acb.js';
      document.body.appendChild(scriptElement);
    }
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.container-detail');
    const animateLoader = document.getElementById('loading');

    animateLoader.innerHTML = loader.loaderSucceed();

    try {
      const restaurant = await restaurantDataSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML += detailRestaurant(restaurant);
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
      });

      animateLoader.style.display = 'none';
    } catch (error) {
      animateLoader.innerHTML = loader.loaderFail();
    }

//     const btnSubmit = document.querySelector('#submit-review');
//     const nameInput = document.querySelector('#inputName');
//     const reviewInput = document.querySelector('#inputReview');

//     btnSubmit.addEventListener('click', (e) => {
//       e.preventDefault();
//       if (nameInput.value === '' && reviewInput.value === '') {
//         alert('Inputan tidak boleh ada yang kosong');
//         nameInput.value = '';
//         reviewInput.value = '';
//       } else {
//         PostReview(url, nameInput.value, reviewInput.value);
//         nameInput.value = '';
//         reviewInput.value = '';
//       }
//     });
  },
};

export default Detail;
