import React from 'react';
import './search-panel.css';
import ItemStatusFilter from '../item-status-filter';

const SearchPanel = () => {
    return (
        <span className="search-panel">
            <input className="search-panel-input" placeholder="type to search"></input>
            <ItemStatusFilter />
        </span>
    );
};

export default SearchPanel;