import {Component} from 'react';
import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardTitle,CardBody,Breadcrumb,BreadcrumbItem,Button
       ,Modal,ModalBody,ModalHeader,Row,Label,Col} from 'reactstrap';
import '../App.css';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';


const required=(val)=>val && val.length; 
	const minLength=(len)=>(val)=> val && (val.length>=len);
	const maxLength=(len)=>(val)=>!val || (val.length<=len);
	

class CommentForm extends Component{
	
	
	constructor(props){
		super(props);
     this.state={
		 modalShow:false
		 
	 };
	 	this.toggleModal=this.toggleModal.bind(this);
	}
	
	toggleModal(){
		this.setState({
			modalShow:!this.state.modalShow
			
		});
		
	}
	
	 handleSubmit(values) {
		 this.props.addcomment(this.props.dishId, values.rating, values.name, values.comment);
		  
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
            }
	
	render(){
		
	return(
	  <div >
	 
	  <Button  color="light" onClick={this.toggleModal}><span class="fa fa-pencil fa-lg"> Submit Comment</span></Button>
		  
	    <Modal isOpen={this.state.modalShow} toggle={this.toggleModal}>
	        <ModalHeader>Add Comment</ModalHeader>
	          <ModalBody>
	               <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
				   
				   
				       <Row className="form-group">
					   
					     <Label htmlfor="rating" md={12}>Rating</Label>
					        <Col md={12}>
							  <Control.select model=".rating" id="rating" name="rating"
							     className="form-control">
							   <option>1</option>
							   <option>2</option>
							   <option>3</option>
							   <option>4</option>
							   <option>5</option>
							    </Control.select>
							</Col>
							</Row>
							<Row className="form-group">
					   
					      <Label htmlfor="name" md={12}>Your Name</Label>
						  
						  <Col md={12}>
						    <Control.text model=".name" id="name" name="name"
							placeholder="Your Name" className="form-control"
							  validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}
                               />
							   <Errors
						    className="text-danger"
							model=".name"
							show="touched"
							messages=
							{{
								required:"Required ",
								minLength:"Name should be greater than or equal to 3 characters",
								maxLength:"Name should be less than or equal to 15 characters"
								
							}}
						 />
						  </Col>
					   </Row>
					   
					    <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows={5}
                    className="form-control"
                  />
                </Col>
              </Row>
			  
			   <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
				   </LocalForm>
	          </ModalBody>
	    </Modal>
	
	</div>
	
	);
	}
	
}



   


 const Selected=(props)=>{
   
   
   
	if(props.dish!=null){
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
   
 
		
	const comments=props.comment.map((comment)=>{
		return(
		
		<div>
		<div>
		</div>
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
		  <CommentForm 
        addcomment={props.addcomment}
		dishId={props.dish.id}
        />
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