import React from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import './app.css';

const App = () => {
    const toDoData = [
        {label: 'Listen lecture', important: false, id: 1},
        {label: 'Learn React', important: true, id: 2},
        {label: 'Write lecture', important: false, id: 3}
    ];

    return (
        <div className="app">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={toDoData} 
            onDeleted={(id) => console.log(id)}/>
        </div>
    );
};

export default App;