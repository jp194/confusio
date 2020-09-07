import React from 'react';
import {Component} from 'react';
import {Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';

class Menu extends Component{
	constructor(props){
		super(props);
		this.state={
				selecteddish:null	
		}
		
		console.log("Constructor called");
	}
		
		setSelectedDish(dish){
			this.setState({selecteddish:dish});
			
		}
		
		componentDidMount(){
			console.log("componentdidmount called");
			
		}
		renderDish(dish){
			if(dish!=null){
			return(
			
			<div className="col-12 mt-1">
			   <Card>
			   
			     <CardImg width="100%" src={dish.image}/>
				   <CardImgOverlay >
				     <CardText>{dish.description}</CardText>
				</CardImgOverlay>
				 
			   </Card>
			</div>
			);
			}
			
			
		}
		
		
		
	
	
	render(){
		const menu=this.props.dishes.map((dish)=>{
			return(
			<div  key={dish.id} className="col-12 col-md-5 m-1">
			   <Card onClick={()=>this.setSelectedDish(dish)}>
			   		<CardImg width="100%" src={dish.image} alt={dish.description}/>
				  <CardImgOverlay >
				     <CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			   </Card>
			</div>
			);
		});
		
		console.log("render method called");
		
		return(
		<div className="container">
		  
		   <div className="row">
			{menu}
		   	</div>
			<div className="row">
			{this.renderDish(this.state.selecteddish)};
		   	</div>
			
			
		</div>
		
		);
		
		
	}
}
export default Menu;