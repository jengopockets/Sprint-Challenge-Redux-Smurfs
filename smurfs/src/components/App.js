import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {getSmurfs,deleteSmurf} from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  deleteItem = (e, index) => {
    e.preventDefault()
    this.props.deleteSmurf(index)
  }
  render() {
    return (
      <div className="App">
        <h1>Smurf Turf</h1>
      </div>
    );
  }
}

export default App;
