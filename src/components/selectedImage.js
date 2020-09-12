import {Component} from 'react';
import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle,CardBody} from 'reactstrap';
import '../App.css'



	
	
	
	

 const Selected=(props)=>{

	if(props.dish!=null){
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
		
	const comments=props.dish.comments.map((comment)=>{
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