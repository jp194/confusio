import  * as ActionTypes from "./Action_Types.js";
import { DISHES } from '../shared/dishes';


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

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
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