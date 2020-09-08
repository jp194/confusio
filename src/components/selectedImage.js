import {Component} from 'react';
import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle,CardBody} from 'reactstrap';


class Selected extends Component{
	constructor(props){
			super(props);

		this.state={
			
		}
		
	}
	
	
	



render(){
	if(this.props.dish!=null){
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
		
	const comments=this.props.dish.comments.map((comment)=>{
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
	
	<div className="row">
	  <div className="col-sm-12 col-md-5 m-1">
	     <Card>
		   <CardImg width="100%" src={this.props.dish.image}>
		   </CardImg>
		    <CardBody>
		   <CardTitle>{this.props.dish.name}</CardTitle>
		   <CardText>{this.props.dish.description}</CardText>

		 </CardBody>
	  
		 </Card>
	    </div>
		
		 <div className="col-sm-12 col-md-5 m-1">
		 <h4>Comments</h4>
	     {comments}
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
 	
}
export default Selected;