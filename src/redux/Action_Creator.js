import  * as ActionTypes from "./Action_Types.js";
import { DISHES } from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl.js';

export const addcomment=(dishId,rating,name,comment)=>({
	
	type:ActionTypes.ADD_COMMENT,
	payload:{
		dishId: dishId,
        rating: rating,
        author: name,
        comment: comment
		
	}
	
});

export const fetchDishes = () => (dispatch) => {
     console.log("fetching");
    return fetch(baseUrl + 'dishes')
	.then(response=>response.json())
	.then(dishes=>dispatch(addDishes(dishes)));
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
	.then(response=>response.json())
	.then(Comments=>dispatch(addComments(Comments)));
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
	.then(response=>response.json())
	.then(Promotions=>dispatch(addPromos(Promotions)));
}


export const promosLoading=()=>({
	type:ActionTypes.PROMOS_LOADING
	
});

export const promosFailed=(errmess)=>({
	type:ActionTypes.PROMOS_FAILED,
	payload:errmess
	
});
