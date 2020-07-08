import React, { Component } from 'react';
import { Form, Jumbotron } from "react-bootstrap";
import "./login.css"

  
  function fetchAPI(username, password) {
    // param is a highlighted word from the user before it clicked the button

    return fetch(`http://localhost:3004/companyz/users/${username}/${password}`)
    .then(response => {
      if (response.status === 401) {
        alert("Invalid Credentials");
      } else  if (response.status === 200) {
        alert("Successfully logged in")
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    })
    // .then(data => {
    //   console.log(data.status + "status")
    //   if (data.status == 200) {
    //     console.log('Success:', data);
    //   this.props.history.push("/afterlogin")
    //   }
    // })
    // .catch(function(error)
    // {
    //   console.log(error + "errror")
    //   if (error.status == 401){
    //     console.log("unauth");
    //   }
    // } ); 
  }

export default class ApplyExit extends Component {
    constructor() {
        super();
        //this.textInput = React.createRef();
       
    this.state = {
      
        username:'',
        password:'',
        fields: {},
        errors: {}

    }
    this.handleChange=this.handleChange.bind(this);
    this.loginForm = this.loginForm.bind(this)
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
        console.log("username" + this.username);
        console.log("password" + this.password);


        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        //alert("Login Successfull");
         //let selectedWord = window.getSelection().toString();
    console.log("hi");
    console.log(window.getSelection().toString());
    fetchAPI(this.refs.username.value, this.refs.password.value);
  }
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
              <Jumbotron className="jumbotron bg-success text-white">
     
      <br></br>

          <br></br>
      <h3>Login to place order</h3>
  
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
      
        </Jumbotron>
      </React.Fragment >
        );
    }
}