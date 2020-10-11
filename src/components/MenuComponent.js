import React from 'react';
import {Component} from 'react';
import {Media} from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import Selected from './selectedImage.js';
import {Link} from 'react-router-dom';

	
		 function RenderMenuItem ({dish}) {
			if(dish!=null){
        return (
		 <Link to={`/menu/${dish.id}`}>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
			</Link>
        );
			}
    }
			
		
		
	
	
	const Menu=(props)=>{
		const menu=props.dishes.map((dish)=>{
			return(
			 <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish}  />
                </div>
			);
		});
		
		
		return(
		<div className="container">
		  
		   <div className="row">
		   <div class="col-12">
		  <Breadcrumb>
		    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
			 <BreadcrumbItem>Menu</BreadcrumbItem>
		  </Breadcrumb> 
		   </div>
			{menu}
		   	</div>
			</div>
		
			
		
		
		);
		
		
	}

export default Menu;