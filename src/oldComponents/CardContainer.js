import React from 'react'
import Card from './Card'

export default function CardContainer(props) {

    return (
        <div className="card-container">
            {props.characters.map(character => {
                return <Card character={character}/>
            })}
        </div>
    )
}
