import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar'
import CardContainer from './Components/CardContainer'
class App extends Component {
  state = {
    characters: [],
    filteredChars: []
  }
  componentDidMount() {
    fetch(`https://api.jikan.moe/v3/manga/2/characters`)
      .then(response => response.json())
      .then(data => this.setState({
        characters: data.characters,
        filteredChars: data.characters
      }))
  }
  filterCharacters = (event) => {
    this.setState({filteredChars: this.filteredCharacters(event)})
  }
  filteredCharacters = (event) => {
    const { characters } = this.state;
    const { value } = event.target;
    return characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(value.toLowerCase())
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Berserk is the fucking shit!</h1>
        <SearchBar filterCharacters={this.filterCharacters} />
        <CardContainer characters={this.state.filteredChars} />
      </div>
    );
  }
}
export default App;

// import React, { Component } from 'react';
// import './App.css';
// import SearchBar from './Components/SearchBar'

// function App() {
//   return (
//     <div className="App">
//       <h1 className="title">Berserk is the fucking shit!</h1>
//       <SearchBar/>
//     </div>
//   );
// }

// export default App;