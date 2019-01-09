import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import './Profile.css';
import Input from '../input/Input'
import Select from '../select/Select'
import FormGroup from '../form-group/FormGroup'

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            honorific: 'Mr',
            email: '',
            phone: '',
            password: '',
            passwordConfirmation: '',
            avatar: 'https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg'
        }

        this.validationSchema = Yup.object().shape({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            honorific: Yup.string().oneOf(['Mr', 'Ms']).required('Required'),
            email: Yup.string().email().required('Required'),
            phone: Yup.string().matches(/^(?:(55\d{2})|\d{2})[6-9]\d{8}$/, 'Phone doesn\'t match pattern XX XXXXX XXXX').required('Required'),
            password: Yup.string().required('Required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords don\'t match').required('Required')
        })
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user}`)
            .then(({ data: { name, email, avatar_url: avatar } }) => {
                const firstName = name.split(' ').shift()
                const lastName = name.split(' ').pop()
                this.setState({
                    firstName,
                    lastName,
                    avatar,
                    email: email || ''
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
                                    <img id="img_sex" className="person-img" alt="Foto de Perfil" src={this.state.avatar} />
                                    <h2 id="who_message" className="card-title">Who are you ?</h2>
                                    <div className="row">
                                        <FormGroup
                                            width={'col-md-2'}
                                            error={errors.honorific}
                                            input={
                                                <Select
                                                    id={'input_sex'}
                                                    name={'honorific'}
                                                    options={[
                                                        { value: 'Mr', label: 'Mr.' },
                                                        { value: 'Ms', label: 'Ms.' }
                                                    ]}
                                                    value={values.honorific}
                                                    handleChange={handleChange}
                                                />
                                            }
                                        />
                                        <FormGroup
                                            width={'col-md-5'}
                                            error={errors.firstName}
                                            input={
                                                <Input
                                                    id={'first_name'}
                                                    type={'text'}
                                                    name={'firstName'}
                                                    value={values.firstName}
                                                    placeholder={'First Name'}
                                                    handleChange={handleChange}
                                                />
                                            }
                                        />
                                        <FormGroup
                                            width={'col-md-5'}
                                            error={errors.lastName}
                                            input={
                                                <Input
                                                    id={'last_name'}
                                                    type={'text'}
                                                    name={'lastName'}
                                                    value={values.lastName}
                                                    placeholder={'Last Name'}
                                                    handleChange={handleChange}
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title">How to contact you ?</h2>
                                            <FormGroup
                                                error={errors.email}
                                                label={'Email'}
                                                input={
                                                    <Input
                                                        id={'email'}
                                                        type={'text'}
                                                        name={'email'}
                                                        value={values.email}
                                                        placeholder={'example@gmail.com'}
                                                        handleChange={handleChange}
                                                    />
                                                }
                                            />
                                            <FormGroup
                                                error={errors.phone}
                                                label={'Phone Number'}
                                                input={
                                                    <Input
                                                        id={'phone'}
                                                        type={'text'}
                                                        name={'phone'}
                                                        value={values.phone}
                                                        handleChange={handleChange}
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title">Securize your account !</h2>
                                            <FormGroup
                                                error={errors.password}
                                                label={'Password'}
                                                input={
                                                    <Input
                                                        id={'password'}
                                                        type={'password'}
                                                        name={'password'}
                                                        value={values.password}
                                                        placeholder={'Type your password'}
                                                        handleChange={handleChange}
                                                    />
                                                }
                                            />
                                            <FormGroup
                                                error={errors.passwordConfirmation}
                                                label={'Password (confirm)'}
                                                input={
                                                    <Input
                                                        id={'passwordConfirmation'}
                                                        type={'password'}
                                                        name={'passwordConfirmation'}
                                                        value={values.passwordConfirmation}
                                                        placeholder={'Type your password again'}
                                                        handleChange={handleChange}
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary btn-lg btn-block" value="Sign up !" />
                        </form>
                    </div>
                )}
            </Formik>
        );
    }

}

export default Profile;