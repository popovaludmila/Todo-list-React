import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="item-status-filter">
                <button className="btn btn-info" type="button">All</button>
                <button className="btn btn-outline-secondary" type="button">Active</button>
                <button className="btn btn-outline-secondary" type="button">Done</button>
            </div>
        );
    }
}
