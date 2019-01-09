import React, { Component } from 'react';
import './FormGroup.css';

class FormGroup extends Component {
    render() {
        return (
            <div className={`form-group ${this.props.width}`}>
                {this.props.label && <label htmlFor={this.props.name} className="col-form-label">{this.props.label}</label>}
                {this.props.input}
                {this.props.error && <div id={`${this.props.name}_feedback`} className="input-feedback">{this.props.error}</div>}
            </div>
        )
    }
}

export default FormGroup