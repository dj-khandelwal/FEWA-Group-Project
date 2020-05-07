import React from 'react';
import rd3 from 'react-d3-library';
import eng_node from './eng_tree';
import pm_node from './pm_tree';
const RD3Component = rd3.Component;

// This file transfers the d3 code to react component

//This is the Engineering Tree in D3
class Eng_d3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: eng_node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
};

//This is the PM Tree in D3
class PM_d3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: pm_node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
};

export {Eng_d3, PM_d3}