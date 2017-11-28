import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Game">Game</Link></li>
                <li><Link to="/Demo">Demo</Link></li>
            </ul>
        );
    }
}

export default Home;