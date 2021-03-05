import React from 'react';
import Menu from './MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';
import {Component} from 'react';
import {DISHES} from '../shared/dishes.js';
import Selected from './selectedImage';
import Header from './Header';
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom';
import Footer from './Footer';
import Home from  './HomeComponent';
import Contactus from "./ContactUs";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import {COMMENTS} from "../shared/comments";
import About from "./AboutUs";
import {connect} from "react-redux"; 
import { postComment,addcomment,fetchDishes, fetchComments, fetchPromos ,fetchLeaders,postFeedback} from '../redux/Action_Creator';
import { actions } from 'react-redux-form';

const mapStatetoProps=state=>{
	return{
	dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
	}
	
}

const mapDispatchToProps = dispatch => ({
  
   postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)), 
   postFeedback: (firstname,lastname,telnum,email,agree,contactType,message)=>
                           dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),
   fetchDishes: () => { dispatch(fetchDishes())},
	 fetchComments: () => { dispatch(fetchComments())},
	 fetchPromos: () => { dispatch(fetchPromos())},
	 fetchLeaders:()=> {dispatch(fetchLeaders())},
	 resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
	 
  });
  
 

class Main extends Component{
	constructor(props){
		super(props);
		
		this.state={
			
		}
		
	}
	
	 componentDidMount(){
		
    this.props.fetchDishes();
	 this.props.fetchComments();
	  this.props.fetchLeaders();
	    this.props.fetchPromos();
	
  }
	
	render() {
		const DishWithId=({match})=>{
		return(
		  <Selected dish={
		  this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
		  dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
		comment={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
		 commentsErrMess={this.props.comments.errMess}
			  addcomment={this.props.addcomment}
			  postComment={this.props.postComment}
            
			   />
		);
		
		};
    return (
	
      <div>
         <Header />
		 
		 <Switch>
		  <Route  path="/home" component={()=><Home 
                    dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                    leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
                    promotion={this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
					commentsErrMess={this.props.comments.errMess}
					promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}
					leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
					
					
                    					/>} />
				 <Route  path="/contactus" component={()=><Contactus resetFeedbackForm={this.props.resetFeedbackForm}
				 postFeedback={this.props.postFeedback}/>} />
			 <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}
                                                  			 />}/>
			 
			 <Route path="/menu/:dishId" component={DishWithId} />
			 
			 <Route path="/aboutus" component={()=><About leaders={this.props.leaders.leaders} 
			 isLoading={this.props.leaders.isLoading}
               errMess={this.props.leaders.errMess}
					
					/>}  />
			 
			 <Redirect to="/home" />
			 
			  
		 </Switch>
		 
			
	
	
	      <Footer />
		 </div>
		 
		
		 
		 
    );
  }
	
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));