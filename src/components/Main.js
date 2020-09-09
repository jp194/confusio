import React from 'react';
import Menu from './MenuComponent';
import {Navbar,NavbarBrand} from 'reactstrap';
import {Component} from 'react';
import {DISHES} from '../shared/dishes.js';
import Selected from './selectedImage';

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
         <Navbar dark color="primary">
		 <div className="container">
		  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
		  </div>
		 </Navbar>
		 
		 <Menu dishes={this.state.dishes}  onClick={(dishId)=>this.setSelectedDish(dishId)}/>
		
		 <Selected dish={this.state.dishes.filter((dish)=>dish.id===this.state.selecteddish)[0]}/>
	
		 </div>
		 
		 
    );
  }
	
}

export default Main;