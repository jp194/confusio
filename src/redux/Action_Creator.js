import  * as ActionTypes from "./Action_Types.js";
import { DISHES } from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl.js';

export const addcomment=(comment)=>({
	
	type:ActionTypes.ADD_COMMENT,
	payload:comment
		
	
	
});

export const fetchDishes = () => (dispatch) => {
     console.log("fetching");
    return fetch(baseUrl + 'dishes')
	.then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
	.then(response=>response.json())
	.then(dishes=>dispatch(addDishes(dishes)))
	.catch(error => dispatch(dishesFailed(error.message)));
}

export const addDishes=(dishes)=>({
	type:ActionTypes.ADD_DISHES,
	
	payload:dishes
	
});

export const dishesLoading=()=>({
	type:ActionTypes.DISHES_LOADING
	
});

export const dishesFailed=(errmess)=>({
	type:ActionTypes.DISHES_FAILED,
	payload:errmess
	
});

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
	 .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
	.then(response=>response.json())
	.then(Comments=>dispatch(addComments(Comments)))
	.catch(error => dispatch(commentsFailed(error.message)));;
}

export const addComments=(comments)=>({
	type:ActionTypes.ADD_COMMENTS,
	
	payload:comments
	
});


export const commentsFailed=(errmess)=>({
	type:ActionTypes.COMMENTS_FAILED,
	payload:errmess
	
});

export const addPromos=(promos)=>({
	type:ActionTypes.ADD_PROMOS,
	
	payload:promos
	
});

export const fetchPromos = () => (dispatch) => {

    return fetch(baseUrl + 'promotions')
	.then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
	.then(response=>response.json())
	.then(Promotions=>dispatch(addPromos(Promotions)))
	.catch(error => dispatch(promosFailed(error.message)));;
}


export const promosLoading=()=>({
	type:ActionTypes.PROMOS_LOADING
	
});

export const promosFailed=(errmess)=>({
	type:ActionTypes.PROMOS_FAILED,
	payload:errmess
	
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addcomment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

