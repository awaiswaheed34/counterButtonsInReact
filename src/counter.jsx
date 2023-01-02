import React, { Component } from "react";
class valueer extends Component {
  state = {
    value: this.props.value,
  };
  formatvalue() {
    const { value } = this.state;

    return value === 0 ? "Zero" : value;
  }

  setClassName() {
    return this.state.value === 0
      ? "p-3 m-4 mb-2 bg-primary text-white border-10 rounded-75 rounded-20"
      : "p-3 m-4 mb-2 bg-secondary text-white border border-warning";
  }
  incremenetPress = () => {
    this.setState({ value: this.state.value + 1 });
  };

  resetButton = () => {
    this.setState({ value: 0 });
  };
  render() {
    return (
      <div className="p-5">
        <span className={this.setClassName()}>{this.formatvalue()}</span>
        <button onClick={this.incremenetPress} className="btn btn-secondary">
          increment
        </button>
        <button className="btn btn-danger" onClick={this.resetButton}>
          RESET
        </button>
      </div>
    );
  }
}

export default valueer;
