import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
        <span className="app-header">
            <h1>Todo List</h1>
            <h2>{toDo} more todo, {done} done</h2>
        </span>
    );
};

export default AppHeader;