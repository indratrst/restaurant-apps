import restaurantDataSource from '../../data/restaurantdata-source';
import {
  listRestaurant,
  createSkeletonListRestaurant,
} from '../templates/template-creator';
import loader from '../templates/loader';

const HomePage = {
  async render() {
    return `

		<div id="loading">

		</div>
    
    
		<div class="breaker">
		<h2 class="text">Picturesque Shutter <br />Resto List</h2>
	  </div>
    <div class="card" id="mainContent" tabindex="0">
    ${createSkeletonListRestaurant(20)}
  	</div>
    `;
  },

  async afterRender() {
    const ElementLoader = document.getElementById('loading');
    ElementLoader.innerHTML = loader.loaderSucceed();

    const restaurantContainer = document.querySelector('#mainContent');

    try {
      const restaurant = await restaurantDataSource.homePage();
      restaurantContainer.innerHTML = '';
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += listRestaurant(resto);
      });
      ElementLoader.style.display = 'none';
    } catch (err) {
      ElementLoader.innerHTML = loader.loaderFail();
    }
  },
};

export default HomePage;
