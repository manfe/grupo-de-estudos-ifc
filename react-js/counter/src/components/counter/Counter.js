import React, { Component } from 'react';
import ButtonCounter from '../button-counter/ButtonCounter';
import './Counter.css';

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((state, props) => ({
      count: state.count + props.increment
    }))
  }

  render() {
    return (
      <div className="counter">
        { this.props.name } terá o incremento de { this.props.increment }

        <br />
        <br />

        <ButtonCounter value={this.state.count} click={ this.increment } />

        {/*<button id="count-btn" onClick={() => this.increment() }>
          { this.state.count }
        </button> */}

        
      </div>
    );
  }
}

export default Counter;