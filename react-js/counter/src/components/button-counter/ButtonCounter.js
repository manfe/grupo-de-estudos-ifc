import React, { Component } from 'react';

class ButtonCounter extends Component {

    render() {
        return (
            <button id="count-btn" onClick={ this.props.click }>
            { this.props.value }
            </button>
        );
    }

}

export default ButtonCounter;