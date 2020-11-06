import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './Action_Types';

export const Comments = (state ={isLoading:true,errMess:null,comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("my Comment: ", comment);
            return state.concat(comment);
			
	    case ActionTypes.ADD_COMMENTS:
			return {...state,isLoading:false,comments:action.payload,errMess:null};


        case ActionTypes.COMMENTS_FAILED:
		    return {...state,isLoading:false, errMess: action.payload};
        default:
          return state;
      }
};