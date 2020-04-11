import React, { Component } from "react";

class Omen extends Component {
  state = {
    omen: ["wróżba jeden", "wróżba dwa", "wróżba trzy"],
    number: "",
    value: "",
  };

  randomNumber = () => {
    const length = this.state.omen.length;
    const random = Math.floor(Math.random() * length);
    this.setState({
      number: random,
    });
  };

  showOmen = () => {
    this.randomNumber();
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const oldOmenArray = this.state.omen;
    const { value } = this.state;
    oldOmenArray.push(value);
    this.setState({
      omen: oldOmenArray,
      value: "",
    });

    alert(`Wróżby jakie mamy do wyboru to: ${oldOmenArray.join(", ")}`);
  };

  render() {
    const { value, omen, number } = this.state;
    return (
      <div>
        <button onClick={this.showOmen}>Zobacz wróżbę</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={value} />
          <button>Dodaj wróżbę</button>
        </form>
        {omen[number] ? <div>{omen[number]}</div> : false}
      </div>
    );
  }
}

export default Omen;
