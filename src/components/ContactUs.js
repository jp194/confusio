import React from 'react';
import {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,Form,FormFeedback,Input,TextArea,Button,Label,FormGroup,Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';


class Contactus extends Component{
	
	 constructor(props){
		 super(props);
	   this.state={
		   firstname:'',
		   lastname:'',
		   email:'',
		   contactnumber:'',
		   agree:false,
		   feedback:'',
		   choice:'',
		   touched:{
			   firstname:false,
			   lastname:false,
			   
		   }
	   }	 
	    this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur=this.handleBlur.bind(this);
		this.validateForm=this.validateForm.bind(this);
		 
	 }
	 
	 handleInputChange(event){
		 const target=event.target;
		 const val= target.type==="checkbox" ? target.checked : target.value;
		 const name = target.name;
		 this.setState({
			 [name]:val
			 	 });
		 
	 }
	  handleSubmit(event) {
		  
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
	 
	 
	 handleBlur(event){
		 const target=event.target;
		 const field=target.name;
		 
		 this.setState({
			 touched:{ ...this.state.touched, [field]: true }
			 
		 });
		 
		 
	 }
	 
	 validateForm(){
		 const errors={
			 firstname:'',
			 lastname:''
			 
		 }
		 if(this.state.touched.firstname==true && this.state.firstname.length<=3){
			 errors.firstname="Name should contain more than 3 characters";
		 }
		 
		 if(this.state.touched.lastname==true && (this.state.lastname.length<3 || this.state.lastname.length>10)){
			  errors.lastname="Name should contain more than 3 and less than 10 characters ";
		 }
		 
		 return errors;
	 }
	 
	render(){
		
		const errors=this.validateForm();
		
	 return(
        <div className="container">
            <div className="row row-content">
			 <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678S"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
			 <div className="col-12">
                      <h3 align="left">Send us your Feedback</h3>
                   </div>
			<div className="col-12 col-md-9">
			<Form onSubmit={this.handleSubmit}>
			  <FormGroup row className="mt-4">
			     
				 <Label md={3}  xs={4}  htmlfor="firstname">First Name</Label>
				 
				 <Col md={8}  xs={5}>
				 <Input type="text" name="firstname"  placeholder="First Name"  value={this.state.firstname}
				 onChange={this.handleInputChange} 	
				 onBlur={this.handleBlur}
				  valid={errors.firstname === '' && this.state.touched.firstname===true}
                  invalid={errors.firstname !== ''}/>
				  <FormFeedback>{errors.firstname}</FormFeedback>
				 </Col>
			  </FormGroup>
			  
			  
			  
			  <FormGroup row className="mt-4">
			     
				 <Label md={3} sm={4} xs={4}  htmlfor="Lastname">Last Name</Label>
				 
				 <Col md={8} sm={5} xs={5}>
				 <Input type="text" name="lastname" placeholder="Last Name" value={this.state.lastname}
				 onChange={this.handleInputChange}
				 onBlur={this.handleBlur}
				  valid={errors.lastname === '' && this.state.touched.lastname===true}
                  invalid={errors.lastname !== ''}
				 />
				   <FormFeedback>{errors.lastname}</FormFeedback>
				 </Col>
				  </FormGroup>
				 <FormGroup row className="mt-4">
			     
				 <Label md={3} sm={4} xs={4}  htmlfor="contactnumber">Contact Number</Label>
				 
				 <Col md={8} sm={5} xs={5}>
				 <Input type="tel" name="contactnumber" placeholder="Contact" value={this.state.contactnumber}
                   onChange={this.handleInputChange}
					onBlur={this.handleBlur}				   />
				 </Col>
				  </FormGroup>
				 
				 <FormGroup row className="mt-4">
			     
				 <Label md={3} sm={4} xs={4}  htmlfor="email"
				 >Email</Label>
				 
				 <Col md={8} sm={5} xs={5}>
				 <Input type="text" name="email" placeholder="Email" value={this.state.email}
				 onChange={this.handleInputChange}
				 onBlur={this.handleBlur}/>
				 </Col>
			  </FormGroup>
			  
			 <FormGroup row>
			  <Col md={{size: 4, offset:3}}>
			  <FormGroup check>
			    <Label check>
			      <Input type="checkbox" name="agree" value={this.state.agree}
				  onChange={this.handleInputChange}></Input>&nbsp;
				  <strong>We may contact you</strong>
				</Label>
			  </FormGroup>
			 </Col>
			 <Col md={4}>
			   <Input type="select" name="choice" value={this.state.choice}
			   onChange={this.handleInputChange}>
			     <option>Phone Number</option>
				 <option>Email</option>
				</Input>
			 </Col>
			</FormGroup>
			
		<FormGroup row>
		   <Col >
		    <Label htmlfor="feedback">Feedback</Label>
		  </Col>
		  <Col md={10}>
		    <Input type="textarea" rows="12" name="feedback" value={this.state.feedback}></Input>
		  </Col>
		</FormGroup>
		<FormGroup row>
		 <Col md={{size:3,offset:2}}>
		  <Button type="submit" color="primary" >Submit</Button>
		  </Col>
		</FormGroup>
			</Form>
        </div>
		</div>
    );
}
}

export default Contactus;