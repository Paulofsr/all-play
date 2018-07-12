import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';


import Header from './header.jsx';
import Video from './video.jsx'
import Videos from './videos.jsx'

class Aplication extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Videos} />
                    <Route path="/video" component={Video} />
                </div>
            </Router>
        )
    }
}

export default Aplication;