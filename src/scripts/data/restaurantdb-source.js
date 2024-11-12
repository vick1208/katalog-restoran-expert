import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {

  static async restaurantsList(){
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
  static async restaurantDetail(id){
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addNewReview(review){
    const response = await fetch(API_ENDPOINT.NEW_REVIEW, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;