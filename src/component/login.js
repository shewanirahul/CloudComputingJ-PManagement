import React, { Component } from 'react';
import { Form, Container } from "react-bootstrap";
import "./login.css"


export default class ApplyExit extends Component {
    constructor() {
        super();
       
    this.state = {
      
        username:'',
        password:'',
        fields: {},
        errors: {}

    }
    this.handleChange=this.handleChange.bind(this);
    this.loginForm = this.loginForm.bind(this)
    this.fetchAPI = this.fetchAPI.bind(this)
}
handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  loginForm(e) {
   
    e.preventDefault();
    if (this.validateForm()) {
        console.log("fields" + this.refs.username.value);



        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
  
    console.log(window.getSelection().toString());
   
    this.fetchAPI(this.refs.username.value, this.refs.password.value);
    

    
  }
}

fetchAPI(username, password) {
  // param is a highlighted word from the user before it clicked the button
  console.log("Username"+username);
  console.log("Username"+password);
  fetch(`http://localhost:3004/companyz/users/${username}/${password}`)
  .then((r) => r.json())
  .then(response => {
    console.log("Line 12"+response.uerId)
    if (!response.uerId) {
      console.log('Failure')
      localStorage.setItem("logInResults","failure");
      alert("Invalid Credentials");
    } else {
      
      console.log('TResult of response   '+ response.uerId);
      
      localStorage.setItem("user",response.uerId);   
      this.props.history.push('/afterLogin')

    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  })
 
}

  validateForm(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //Password
    if(!fields["password"]){
        formIsValid = false;
        errors["password"] = "password cannot be empty";
     }
     if(!fields["username"]){
        formIsValid = false;
        errors["username"] = "username cannot be empty";
     }
    
     this.setState({
        errors: errors
      });
      return formIsValid;
    }
   
    render() {
        return (
            <React.Fragment>
             <h1>WELCOME</h1>  
        <Container className="login">      
      <Form className="loginForm">
          <br></br>
          <h5> </h5>
          <br></br>
  <form method="post"  name="loginForm"  onSubmit= {this.loginForm } >
        <label>Username</label>
        <input type="text" name="username" ref="username" onChange={this.handleChange} placeholder="Enter your username"/>
        <div className="errorMsg">{this.state.errors.username}</div>
  <br></br>
        <label>Password</label>
        <input type="password" name="password" ref="password" onChange={this.handleChange}placeholder="Enter your password" />
        <div className="errorMsg">{this.state.errors.password}</div>
        <br></br>
        <input type="submit" className="btn btn-success "  value="Login" />
        </form>
       
        </Form>
        </Container> 
      </React.Fragment >
        );
    }
}
