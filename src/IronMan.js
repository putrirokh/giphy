import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class IronMan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
  
    componentDidMount (){
        axios.get('https://api.giphy.com/v1/gifs/search?api_key=FoGWna0mZlLqGAmjRM4ol6biAmVJ9yMW&q=iron%20man&limit=9&offset=0&rating=g&lang=en')
            .then((data) => {
                this.setState({
                    items: data.data.data
                })
            })
    }
    
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="links"><a href="/">HOME</a></div>
                    <p className="title">
                        IRON MAN GIPHY
                   </p>
                   <div className='gifrow'>
                    {
                        this.state.items.map((item => 
                            <img className="gif" alt={item.title} width='270' height="270" src={ item.images.original.url } />
                        ))
                    }
                    </div>
                </header>
            </div>
        )
    }   
}

export default IronMan;