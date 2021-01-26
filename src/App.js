import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import IronMan from './IronMan';
import Search from './Search';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/ironman' component={IronMan}></Route>
                    <Route path='/search' component={Search}></Route>
                </div>
            </Router>
        );
    }
}

export default App; 
