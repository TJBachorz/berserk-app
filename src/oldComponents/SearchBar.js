import React from 'react'
import CardContainer from './CardContainer'

export default class SearchBar extends React.Component {

    state = {
        characters: [],
        filteredChars: []
    }

    componentDidMount() {
        fetch(`https://api.jikan.moe/v3/manga/2/characters`)
            .then(response => response.json())
            .then(data => this.setState({characters: data.characters}))
    }

    filterCharacters = (event) => {
        if (event.target.value === "") {
            this.setState({filteredChars: []})
            return this.state.characters
        } else {
            this.setState({filteredChars: this.filteredCharacters(event)}) 
        }
    }

    filteredCharacters = (event) => {
        return this.state.characters.filter(character => character.name.toLowerCase().includes(event.target.value.toLowerCase()))
    }

    render() {
        return (
            <div>
                <div className="search-bar-container">
                    <input type='text' name='search' onChange={this.filterCharacters} placeholder="Select a character by name"/>
                </div>
                <div>
                    {
                    this.state.filteredChars.length > 0 ?
                        <CardContainer characters={this.state.filteredChars}/>
                    : <CardContainer characters={this.state.characters}/>
                    }
                </div>
            </div>
        )
    }
}
