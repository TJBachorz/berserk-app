import React from 'react'

export default class Card extends React.Component {

    state = {
        isActive: false
    }

    toggleActive = () => {this.setState({isActive: !this.state.isActive})}

    render() {
        const {name, image_url, mal_id} = this.props.character
        return (
            <div key={mal_id} className="card" >
                <h2 className="char-name" onClick={this.toggleActive}>{name}</h2>
                {
                    this.state.isActive ?
                        <img src={image_url} alt={`A picture of ${name}`}/>
                    : null
                }
                {
                    name === "Guts" && this.state.isActive ? 
                        <p className="test">What a fucking bro!</p>
                    : null
                }
            </div>
        )
    }
}
