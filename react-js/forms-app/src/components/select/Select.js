import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
    render() {
        return (
            <select
                className="form-control"
                id={this.props.id}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handleChange}
            >
                {this.props.options.map(({ value, label }, key) => <option value={value} key={key}>{label}</option>)}
            </select>
        )
    }
}

export default Select