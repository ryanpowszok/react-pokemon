import React, { Component } from "react";
import Pokemon from "../Pokemon";

class PokemonContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div>
        <Pokemon name="Pikachu" height="5.6" weight="180" image="" experience="10" />
      </div>
    );
  }
}

export default PokemonContainer;
