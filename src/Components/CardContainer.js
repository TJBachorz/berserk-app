import React from 'react'
import Card from './Card'
export default function CardContainer({ characters }) {
    const displayCharacters = () => {
        return characters.map(character => {
            return <Card
                key={character.mal_id}
                character={character}
            />
        })
    }
    return (
        <div className="card-container">
            { displayCharacters() }
        </div>
    )
}