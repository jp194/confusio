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
import { addcomment,fetchDishes } from '../redux/Action_Creator';

const mapStatetoProps=state=>{
	return{
	dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
	}
	
}

const mapDispatchToProps = dispatch => ({
  
    addcomment: (dishId, rating, name, comment) => dispatch(addcomment(dishId, rating, name, comment)),
     fetchDishes: () => { dispatch(fetchDishes())}
  });
  
 

class Main extends Component{
	constructor(props){
		super(props);
		
		this.state={
			
		}
		
	}
	
	 componentDidMount(){
    this.props.fetchDishes();
  }
	
	render() {
		const DishWithId=({match})=>{
		return(
		  <Selected dish={
		  this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
		  dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
		comment={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
			  addcomment={this.props.addcomment}
			   />
		);
		
		};
    return (
	
      <div>
         <Header />
		 
		 <Switch>
		  <Route  path="/home" component={()=><Home 
                    dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                    leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                    promotion={this.props.promotions.filter((promotion)=>promotion.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    					/>} />
				 <Route  path="/contactus" component={()=><Contactus />} />
			 <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}
                                                  			 />}/>
			 
			 <Route path="/menu/:dishId" component={DishWithId} />
			 
			 <Route path="/aboutus" component={()=><About leaders={this.props.leaders} />}  />
			 
			 <Redirect to="/home" />
			 
			  
		 </Switch>
		 
			
	
	
	      <Footer />
		 </div>
		 
		
		 
		 
    );
  }
	
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));