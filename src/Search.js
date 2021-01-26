import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class IronMan extends Component {
    typingTimer = null;

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            query:""
        }
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (evt) => {
        const val = evt.target.value;
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => {
         if (val) {
           this.search(val)
         }else{
            this.setState({
                items:[]
            })
         }
        }, 500);
      }

    search(query){
        console.log(query)
        axios.get('https://api.giphy.com/v1/gifs/search?api_key=FoGWna0mZlLqGAmjRM4ol6biAmVJ9yMW&q='+query+'&limit=9&offset=0&rating=g&lang=en')
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
                        SEARCH YOUR GIPHY
                   </p>
                   <input placeholder='Search Giphy' className='search' onChange={this.handleChange}></input>
                   <div className='gifrow'>
                    {
                        this.state.items.map((item => 
                            <img className="gif" key={item.id} alt={item.title} width='270' height="270" src={ item.images.original.url } />
                        ))
                    }
                    </div>
                </header>
            </div>
        )
    }   
}

export default IronMan;