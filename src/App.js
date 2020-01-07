import React from 'react';
// import logo from './logo.svg';
import { CardList } from "./components/card-list/card-list.component";
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters ={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
