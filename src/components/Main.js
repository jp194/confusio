import React from 'react';
import Menu from './MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';
import {Component} from 'react';
import {DISHES} from '../shared/dishes.js';
import Selected from './selectedImage';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Home from  './HomeComponent';
import Contactus from "./ContactUs";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import {COMMENTS} from "../shared/comments";
import About from "./AboutUs";

class Main extends Component{
	constructor(props){
		super(props);
		
		this.state={
			dishes:DISHES,
			promotions:PROMOTIONS,
			leaders:LEADERS,
			comments:COMMENTS
		}
		
	}
	
	
	
	render() {
		const DishWithId=({match})=>{
		return(
		  <Selected dish={
		  this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
		comment={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
			  
			   />
		);
		
		};
    return (
	
      <div>
         <Header />
		 
		 <Switch>
		  <Route  path="/home" component={()=><Home 
                    dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                    promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                    					/>} />
				 <Route  path="/contactus" component={()=><Contactus />} />
			 <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />}/>
			 
			 <Route path="/menu/:dishId" component={DishWithId} />
			 
			 <Route path="/aboutus" component={()=><About leaders={this.state.leaders} />}  />
			 
			 <Redirect to="/home" />
			 
			  
		 </Switch>
		 
			
	
	
	      <Footer />
		 </div>
		 
		
		 
		 
    );
  }
	
}

export default Main;