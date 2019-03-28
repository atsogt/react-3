import React, { Component } from 'react';
import Name from "./Name";
import logo from './logo.svg';
import './App.css';
import PersonalInfo from './PersonalInfo';
import FavoriteMovies from './FavoriteMovies';

class App extends Component {
  constructor(){
    super()
    this.state = {
      index: 0
    }
  }
  previous(){
    if(this.state.index === 0) {
      this.setState({index: 24})
    }
    else if(this.state.index > 0) {
      this.setState({index: this.state.index-1})
    }
  }
    next(){
      if(this.state.index === 24) {
        this.setState({index: 0})
      }
      else if(this.state.index >= 0) {
        this.setState({index: this.state.index+1})
      }
  };


  render() {
    return (
      <div className="Card">
        <nav className="Home">Home</nav>
        <Name index={this.state.index} />
        <PersonalInfo index={this.state.index} />
        <FavoriteMovies index={this.state.index} />
        <button onClick={() => this.previous()}>Previous</button>
        <button onClick={() =>this.next()}>Next</button>
      </div>
    );
  }
}

export default App;
