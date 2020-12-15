import React, { Component } from 'react'
export default class Card extends Component {
    state = {
        isActive: false
    }
    toggleActive = () => {
        this.setState({ isActive: !this.state.isActive });
    }
    render() {
        const { name, image_url } = this.props.character
        const { isActive } = this.state;
        return (
            <div className="card">
                <h2 className="char-name" onClick={this.toggleActive}>{name}</h2>
                { isActive && <img src={ image_url } alt={ name } /> }
                {/* { null || false } */}
                { name === "Guts" && isActive ?
                    <p className="test">What a fucking bro!</p>
                    : null
                }
            </div>
        )
    }
}