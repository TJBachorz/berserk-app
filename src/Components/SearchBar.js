import React from 'react'
export default function SearchBar({ filterCharacters }) {
    return (
        <div className="search-bar-container">
            <input
                type='text'
                name='search'
                placeholder="Select a character by name"
                onChange={filterCharacters}
            />
        </div>
    )
}