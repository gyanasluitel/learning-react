import './Counter.css';
import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  handleDecrease = () => {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return {
          count: prevState.count - 1,
        };
      }
    });
  };

  render() {
    return (
      <div className='counter-box'>
        <span className='count'>{this.state.count}</span>
        <div className='controls'>
          <button
            className='btn-controls btn-plus'
            onClick={this.handleIncrease}
          >
            +
          </button>
          <button className='btn-controls' onClick={this.handleDecrease}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
