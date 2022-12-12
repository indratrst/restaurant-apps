import API_ENDPOINT from '../globals/api-endpoint';
// import CONFIG from "../globals/config";

class RestaurantDataSource {
  static async homePage() {
    const response = await fetch(API_ENDPOINT.HOMEPAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async PostRestaurant(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDataSource;
