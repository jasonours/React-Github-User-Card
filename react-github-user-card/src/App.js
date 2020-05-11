import React from 'react';
import axios from 'axios';
import User from './components/User';
import { Heading } from './components/Styles'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount(){
    axios
    .get("https://api.github.com/users/jasonours")
    .then(res => this.setState({user: res.data}))
    .catch(err => console.log(err))
    axios
    .get("https://api.github.com/users/jasonours/followers")
    .then(res => this.setState({followers: res.data}))
    .catch(err => console.log(err))
    // axios
    // .get("https://api.github.com/users/jasonours/following")
    // .then(res => this.setState({following: res.data}))
    // .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <Heading>GitHub User Cards</Heading>
        <User user={this.state.user} followers={this.state.followers} following={this.state.following}/>
      </div>
    )
  }
}

export default App;
