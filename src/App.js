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
        <CardList name="jonny"><p>yo</p></CardList>
        {
          this.state.monsters.map(monster =>
          <h1 key={monster.id}>{ monster.username}</h1>)
        }
      </div>
    );
  }
}

export default App;
