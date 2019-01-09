import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return (
            <input
                className="form-control"
                id={this.props.id}
                placeholder={this.props.placeholder || ''}
                type={this.props.type}
                value={this.props.value}
                onChange={this.props.handleChange}
            />
        )
    }
}

export default Input