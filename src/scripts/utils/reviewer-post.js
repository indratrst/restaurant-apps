import RestaurantDataSource from '../data/restaurantdata-source';

const PostReview = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review,
  };

  RestaurantDataSource.PostRestaurant(dataReview);

  const reviewContainer = document.querySelector('.reviews');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const userReview = `
  <div class="reviews">
    <div class="container-card-review">
      <div class="card-review">
        <div class="wrap-review">
          <h3>
            <b>${name}</b>
          </h3>
          <h4>Date: ${date}</h4>
        </div>
        <p>
          <strong> Review :</strong> <br />
          ${review}
        </p>
      </div>
    </div>`;

  reviewContainer.innerHTML += userReview;
};

export default PostReview;
