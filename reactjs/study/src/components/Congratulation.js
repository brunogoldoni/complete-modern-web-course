import React, { Component, useState } from "react";

export default class Congratulation extends Component {
  state = {
    type: this.props.type,
    name: this.props.name,
  };

  setType(e) {
    this.setState({ type: e.target.value });
  }

  setName(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { type, name } = this.state;

    return (
      <div>
        <h1>
          {type} {name}
        </h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo"
          value={type}
          onChange={(e) => this.setType(e)}
        />
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => this.setName(e)}
        />
      </div>
    );
  }
}
