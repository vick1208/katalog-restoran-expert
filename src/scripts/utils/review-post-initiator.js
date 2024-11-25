import RestaurantDbSource from '../data/restaurantdb-source';


const ReviewPostInitiator = {
  init({ id, name, review }){
    const post = {
      id: `${id}`,
      name,
      review
    };

    this._postReview(post);

  },

  async _postReview(post){
    const response = await RestaurantDbSource.addNewReview(post);
    const getReview = response.customerReviews;

    this._getReviewUpdate(getReview);
  },

  async _getReviewUpdate(getReview){
    const reviewPost = document.getElementById('reviewPost');
    reviewPost.innerHTML = '';

    getReview.forEach((item) => {
      reviewPost.innerHTML += `
            <div class="review__card">
                <h2 class="review__text"><span>${item.review}</span></h2>
                <p class="review__sender">By <span>${item.name}</span> </p>
                <p class="review__date">${item.date}</p>
            </div>
            `;
    });
  }

};

export default ReviewPostInitiator;