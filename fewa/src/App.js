import React from 'react';
import './App.css';
import TrackMain from './track.js'
import "./index.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div>
            {/* <Route exact path="/" component={TrackMain}/> */}
            <TrackMain />
      </div>
    )
  }
};
export default App;
