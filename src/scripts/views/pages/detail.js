import UrlParser from '../../routes/url-parser';
import restaurantDataSource from '../../data/restaurantdata-source';
import { detailRestaurant } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/reviewer-post';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import loader from '../templates/loader';

const Detail = {
  async render() {
    return /* html */`

  <div class="breaker">
  <h2 class="text">Picturesque Shutter <br />Resto Detail</h2>
  <div id="loading">
  
  </div>
  </div>
  <div class="container-detail" id="container-detail" tabindex="0">
  
  </div>
  
  <div id="likeButtonContainer"></div>
  <div class="container- ">
  <form class="form-review">
    <h2>Input Your Review</h2>
  <label for="inputName">Nama</label>
  <input type="text" name="inputName" id="inputName" />
  <label for="inputReview">Review</label>
    <input type="text-area" name="inputReview" id="inputReview" /> 
  
  <button id="submit-review" class="btn-review"><a href="#/review">Submit </a></button>
 
  </form>
  </div>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('.container-detail');
    const animateLoader = document.getElementById('loading');

    animateLoader.innerHTML = loader.loaderSucceed();

    try {
      const restaurant = await restaurantDataSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML += detailRestaurant(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        FavoriteRestaurant: FavoriteRestaurantIdb,
        restaurant,
      });

      animateLoader.style.display = 'none';
    } catch (error) {
      animateLoader.innerHTML = loader.loaderFail();
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' && reviewInput.value === '') {
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
