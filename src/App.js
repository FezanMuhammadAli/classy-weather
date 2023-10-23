import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncreament = this.handleIncreament.bind(this);
  }

  handleDecrement() {
    this.setState((currtate) => {
      return { count: currtate.count - 1 };
    });
  }

  handleIncreament() {
    this.setState((currtate) => {
      return { count: currtate.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIncreament}>+</button>
      </div>
    );
  }
}
export default Counter;
