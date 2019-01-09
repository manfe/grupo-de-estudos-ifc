import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
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

        this.validationSchema = Yup.object().shape({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            treatment: Yup.string().oneOf(['Mr', 'Ms']).required('Required'),
            email: Yup.string().email().required('Required'),
            phone: Yup.string().matches(/^(?:(55\d{2})|\d{2})[6-9]\d{8}$/, 'Phone doesnt match pattern XX XXXXX XXXX').required('Required'),
            password: Yup.string().required('Required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords don\'t match').required('Required')
        })
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user}`)
            .then(({ data: { name, email }}) => {
                const firstName = name.split(' ').shift()
                const lastName = name.split(' ').pop()
                this.setState({
                    firstName,
                    lastName,
                    email: email || '',
                    phone: '49999999999'
                });
            })
            .catch(console.error)
    }

    handleSubmit(values, { setSubmitting }) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 500);
    }

    render() {
        return (
            <Formik
                initialValues={this.state}
                onSubmit={this.handleSubmit}
                validationSchema={this.validationSchema}
                enableReinitialize={true}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <div className="container margin-top-10">
                        <form onSubmit={handleSubmit}>
                            <div className="card person-card">
                                <div className="card-body">
                                    <img id="img_sex" className="person-img" alt="Foto de Perfil"
                                        src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg" />
                                    <h2 id="who_message" className="card-title">Who are you ?</h2>
                                    <div className="row">
                                        <div className="form-group col-md-2">
                                            <select id="input_sex" name="treatment" value={values.treatment} className="form-control" onChange={handleChange}>
                                                <option value="Mr">Mr.</option>
                                                <option value="Ms">Ms.</option>
                                            </select>
                                            {errors.treatment && <div className="input-feedback">{errors.treatment}</div>}
                                        </div>
                                        <div className="form-group col-md-5">
                                            <input id="first_name" type="text" name="firstName" value={values.firstName} className="form-control" placeholder="First name" onChange={handleChange} />
                                            {errors.firstName && <div id="first_name_feedback" className="invalid-feedback">{errors.firstName}</div>}
                                        </div>
                                        <div className="form-group col-md-5">
                                            <input id="last_name" type="text" name="lastName" value={values.lastName} className="form-control" placeholder="Last name" onChange={handleChange} />
                                            {errors.lastName && <div id="last_name_feedback" className="invalid-feedback">{errors.lastName}</div>}
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
                                                <input type="email" name="email" value={values.email} className="form-control" id="email" placeholder="example@gmail.com" onChange={handleChange} />
                                                {errors.email && <div id="email_feedback" className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="tel" className="col-form-label">Phone number</label>
                                                <input type="text" name="phone" value={values.phone} className="form-control" id="tel" placeholder="49 988888888" onChange={handleChange} />
                                                {errors.phone && <div id="phone_feedback" className="invalid-feedback">{errors.phone}</div>}
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
                                                <input type="password" name="password" value={values.password} className="form-control" id="password" placeholder="Type your password" onChange={handleChange} />
                                                {errors.password && <div id="password_feedback" className="invalid-feedback">{errors.password}</div>}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password_conf" className="col-form-label">Pasword (confirm)</label>
                                                <input type="password" name="passwordConfirmation" value={values.passwordConfirmation} className="form-control" id="password_conf" placeholder="Type your password again" onChange={handleChange} />
                                                {errors.passwordConfirmation && <div id="password_confirmation_feedback" className="invalid-feedback">{errors.passwordConfirmation}</div>}
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
                )}
            </Formik>
        );
    }

}

export default Profile;