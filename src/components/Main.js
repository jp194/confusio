import React from 'react';
import Menu from './MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';
import {Component} from 'react';
import {DISHES} from '../shared/dishes.js';
import Selected from './selectedImage';
import Header from './Header';
import Footer from './Footer';

class Main extends Component{
	constructor(props){
		super(props);
		
		this.state={
			dishes:DISHES,
			selecteddish:null
			
		}
		
	}
	setSelectedDish(dshid){
			this.setState({selecteddish:dshid});
			
		}
	
	
	render() {
    return (
	
      <div>
         <Header />
		 
		 <Menu dishes={this.state.dishes}  onClick={(dishId)=>this.setSelectedDish(dishId)}/>
		
		 <Selected dish={this.state.dishes.filter((dish)=>dish.id===this.state.selecteddish)[0]}/>
	
	
	
	      <Footer />
		 </div>
		 
		
		 
		 
    );
  }
	
}

export default Main;