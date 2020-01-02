import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';
import Insight from './screens/Insight';
import Video from './screens/Video';
import Tab from './screens/Tab';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
 const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
export class Login extends Component {
  state = {
    redirectToReferrer: false,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    formErrors: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
    }
    handleSubmit = e => {
      e.preventDefault();
      localStorage.clear();
      const {firstName} = this.state;
      localStorage.setItem('firstName', firstName);
   
      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    };
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "firstName":
          formErrors.firstName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "lastName":
          formErrors.lastName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
        case "password":
          formErrors.password =
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
        default:
          break;
      }
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
    
    render() {
      const { redirectToReferrer } = this.state;
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      const { formErrors } = this.state;

      if (redirectToReferrer === true) {
        return <Redirect to={from} />
      }
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit" ref='btn'>Create Account</button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
class App extends Component {
  render() {
    
    return (
    <Router>
      <div className='body'>
        <Switch className="App">
            <Route  path='/' exact component={ () => {
              return <Home />
            }} />
            <Route  path='/Tab' exact component={ () => {
              return <Tab />
            }} />
            <Route path="/login" exact component={Login}/>
            <PrivateRoute  path='/Insight' exact component={() => {
              return <Insight name={this.props.firstName} />
            }} />

            <Route  path='/1' exact component={() => {
              return <Video name={this.props.firstName} />
            }} />
            <Route  component={ () => {
              return(
                <div> <h1>This section is not available yet, please go back to <a href="/" style={{color:"red"}}>HOME</a></h1> </div>
                )
              }} />
      </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
