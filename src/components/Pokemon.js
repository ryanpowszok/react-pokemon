import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: props.sprites.front_default,
      imageName: 'default'
    }
  }

  updateImageSprite(sprites) {
    switch (this.state.imageName) {
      case 'default':
        if(sprites.front_shiny && sprites.front_shiny.length) {
          this.setState(state => ({
            image: sprites.front_shiny,
            imageName: 'shiny'
          }))
        }
        break
      default:
        this.setState(state => ({
          image: sprites.front_default,
          imageName: 'default'
        }))
    }
  }

  componentDidMount() {
    this.spriteInterval = setInterval(() => this.updateImageSprite(this.props.sprites), 300)
  }

  componentWillUnmount() {
    clearInterval(this.spriteInterval)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <img className="right floated mini ui image" src={this.state.image} width="35" height="35" />
          <div className="header">{this.props.name}</div>
          <div className="description">
            <div>Base Experience: {this.props.base_experience}</div>
            <div>Height: {this.props.height}</div>
            <div>Weight: {this.props.weight}</div>
          </div>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  base_experience: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  sprites: PropTypes.shape({ front_default: PropTypes.string.isRequired, front_shiny: PropTypes.string.isRequired }).isRequired
}

export default Pokemon
