import  * as ActionTypes from "./Action_Types.js";

export const addcomment=(dishId,rating,name,comment)=>({
	
	type:ActionTypes.ADD_COMMENT,
	payload:{
		dishId: dishId,
        rating: rating,
        author: name,
        comment: comment
		
	}
	
});