import React from 'react';
import {Component} from 'react';
import {Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle} from 'reactstrap';
import Selected from './selectedImage.js';

class Menu extends Component{
	
		
		
		
		
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
			   <Card onClick={()=>this.props.onClick(dish.id)}>
			   		<CardImg width="100%" src={dish.image} alt={dish.description}/>
				  <CardImgOverlay >
				     <CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			   </Card>
			</div>
			);
		});
		
		
		return(
		<div className="container">
		  
		   <div className="row">
			{menu}
		   	</div>
			</div>
		
			
		
		
		);
		
		
	}
}
export default Menu;