import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ""
  }
}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){
    const { monsters , searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeHolder = "search monster" handlerChange = { e => this.setState({searchField : e.target.value})}/>
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

// function App() {
  
// }

export default App;
