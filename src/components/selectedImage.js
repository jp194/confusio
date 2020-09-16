import {Component} from 'react';
import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle,CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import '../App.css';
import {Link} from 'react-router-dom';

 const Selected=(props)=>{
   
	if(props.dish!=null){
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
		
	const comments=props.comment.map((comment)=>{
		return(
		
		<div>
		<p>{comment.comment}</p>
		
		<p>--{comment.author} ,{new Date(comment.date).toLocaleDateString("en-US", options)}</p>
		<p id='dt'>
		 </p>
		</div>
		);
		
		
	});
	
	
	
	return(
     <div className="container">	
	<div className="row">
	   <div className="col-12 m-3">
	    <Breadcrumb>
		    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
			 <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
			 <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
		  </Breadcrumb> 
		 
	   </div>
	
	  <div className="col-sm-12 col-md-5 m-1">
	<div className="eg">
	
	    <Card >
		   <CardImg width="100%" src={props.dish.image}>
		   </CardImg>
		    <CardBody>
		   <CardTitle>{props.dish.name}</CardTitle>
		   <CardText>{props.dish.description}</CardText>

		 </CardBody>
	  
		 </Card>
		</div>
		
	    </div>
		
		 <div className="col-sm-12 col-md-5 m-1">
		 <h4>Comments</h4>
	     {comments}
		 </div>
	  </div>
	  </div>
	  
	
	
	);	
	}else{
		return(
		<div>

		</div>
		);
	}

	
	}
	
 	

export default Selected;