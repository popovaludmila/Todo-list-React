import React, { Component } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import './app.css';

export default class App extends Component {

    state = {
        toDoData: [
            { label: 'Listen lecture', important: false, id: 1 },
            { label: 'Learn React', important: true, id: 2 },
            { label: 'Write lecture', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ toDoData }) => {
            const idx = toDoData.findIndex((el) => el.id === id);
            
            const newToDoData = [
                ...toDoData.slice(0, idx),
                ...toDoData.slice(idx + 1),
            ]

            return {toDoData: newToDoData}
        });
    };

    render() {
        return (
            <div className="app">
                <AppHeader />
                <SearchPanel />
                <TodoList todos={this.state.toDoData}
                    onDeleted={this.deleteItem} />
            </div>
        );
    };
};
