import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './Action_Types';

export const Comments = (state ={isLoading:true,errMess:null,comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("my Comment: ", comment);
           return {...state, comments: state.comments.concat(comment) };
		   
	    case ActionTypes.ADD_COMMENTS:
			return {...state,isLoading:false,comments:action.payload,errMess:null};


        case ActionTypes.COMMENTS_FAILED:
		    return {...state,isLoading:false, errMess: action.payload};
        default:
          return state;
      }
};