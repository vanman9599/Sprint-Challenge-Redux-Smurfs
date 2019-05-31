import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
// import { Button } from "reactstrap";


import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
       {this.props.smurfs.map(smurf => {
         return(
           <div>
          <h1>{smurf.name}</h1>
          <ul>
            <li>Age: {smurf.age}</li>
            <li>Height: {smurf.height}</li>
          </ul>
          </div>
         );
       })}
      
         <input type="text" name="name" placeholder="Name" />
         <input type="number" name="age" placeholder="Age" />
         <input type="text" name="height" placeholder="Height" />
         <button onClick={this.props.addSmurf}>Add Smurf</button>
         
       
      </div>
    );
  };


componentDidMount(){
  this.props.getSmurfs();
}
}
const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf })(App);
