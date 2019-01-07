import React, { Component } from 'react';
//import PropType from 'prop-types';
import axios from 'axios';
import './Profile.css';

class Profile extends Component {

constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      treatment: 'Mr',
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: ''
    }

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {    
    axios.get(`https://api.github.com/users/${this.props.user}`)
    .then((response) => {
      this.setState({
        firstName: response.data.name
      });
      
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  onChangeValue({ target: { name, value } }) {
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="container margin-top-10">
        <form onSubmit={ this.onSubmit }>
          <div className="card person-card">
              <div className="card-body">
                  <img id="img_sex" className="person-img" alt="Foto de Perfil"
                      src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg" />
                  <h2 id="who_message" className="card-title">Who are you ?</h2>
                  <div className="row">
                      <div className="form-group col-md-2">
                        <select id="input_sex" name="treatment" value={ this.state.treatment } className="form-control" onChange={ this.onChangeValue }>
                              <option value="Mr">Mr.</option>
                              <option value="Ms">Ms.</option>
                          </select>
                      </div>
                      <div className="form-group col-md-5">
                          <input id="first_name" type="text" name="firstName" value={ this.state.firstName } className="form-control" placeholder="First name" onChange={ this.onChangeValue } />
                          <div id="first_name_feedback" className="invalid-feedback">
                              
                          </div>
                      </div>
                      <div className="form-group col-md-5">
                          <input id="last_name" type="text" name="lastName" value={ this.state.lastName } className="form-control" placeholder="Last name" onChange={ this.onChangeValue }  />
                          <div id="last_name_feedback" className="invalid-feedback">
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className="row">
              <div className="col-md-6">
                  <div className="card">
                      <div className="card-body">
                          <h2 className="card-title">How to contact you ?</h2>
                          <div className="form-group">
                              <label htmlFor="email" className="col-form-label">Email</label>
                              <input type="email" name="email" value={ this.state.email } className="form-control" id="email" placeholder="example@gmail.com" onChange={ this.onChangeValue }/>
                              <div className="email-feedback">
                              
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="tel" className="col-form-label">Phone number</label>
                              <input type="text" name="phone" value={ this.state.phone } className="form-control" id="tel" placeholder="+33 6 99 99 99 99" onChange={ this.onChangeValue }/>
                              <div className="phone-feedback">
                              
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
                  
              <div className="col-md-6">
                  <div className="card"> 
                      <div className="card-body">
                          <h2 className="card-title">Securize your account !</h2>
                          <div className="form-group">
                              <label htmlFor="password" className="col-form-label">Pasword</label>
                              <input type="password" name="password" value={ this.state.password } className="form-control" id="password" placeholder="Type your password" onChange={ this.onChangeValue }/>
                              <div className="password-feedback">
                              
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="password_conf" className="col-form-label">Pasword (confirm)</label>
                              <input type="password" name="passwordConfirmation" value={ this.state.passwordConfirmation } className="form-control" id="password_conf" placeholder="Type your password again" onChange={ this.onChangeValue }/>
                              <div className="password_conf-feedback">
                              
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="margin-top-10">
              <input type="submit" className="btn btn-primary btn-lg btn-block" value="Sign up !" />
          </div>
        </form>
      </div>
    );
  }

}

export default Profile;