import React from 'react'
import './SearchBar.styles.scss'

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search..."/>
            <i class="fas fa-search"></i>
        </div>
    )
}

export default SearchBar
