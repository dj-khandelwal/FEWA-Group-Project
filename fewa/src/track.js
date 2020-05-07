import React, {Component} from "react"
import "./grid.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import {UXImg, SWEImg, PMImg, DSImg} from "./trackIcons"
import {Greeting} from './greeting'
import {Eng_d3, PM_d3} from './myd3'
import MapContainer from './mapcontainer';

// this is the main component that controls what to render in the page
class TrackMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendWhat:'HOME', // HOME is the greeting page
    }
    this.showSubTrack = this.showSubTrack.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goMap = this.goMap.bind(this);
    this.showTrack=this.showTrack.bind(this);
    }
  
  //changes state when user clicks on home icon
  goHome(e) {
    e.preventDefault();
    this.setState(state => ({
      rendWhat: 'HOME',
    }))
  };
  goMap(e) {
    e.preventDefault();
    this.setState(state => ({
      rendWhat: 'MAP',
    }))
  };

  //Change the state rendWhat, called when we want the subtrack d3 page.
  //We only have 2 trees now, the rendWhat changed to 'SUB_ENG' and 'SUB_PM' are the two trees.
  showSubTrack(e) {
    switch(e) {
      case 'front-end':
        console.log('e',e);
        this.setState(state => ({
          rendWhat:'SUB_ENG',
        }))
      break;      
      case 'back-end':
        this.setState(state => ({
          rendWhat:'SUB_ENG',
        }))
      break;    
      case 'dev-ops':
        this.setState(state => ({
          rendWhat:'SUB_ENG',
        }))
      break;    
      case 'productmanagement':
        this.setState(state => ({
          rendWhat:'SUB_PM',
        }))
      break;
    }    
  };
  
  //This is the core function where we decide which page to be rendered.
  showTrack () {
    switch (this.state.rendWhat) {
      case 'UX':return <UX showSubTrack={this.showSubTrack}/>; 
      case 'SWE' :
          return <SWE showSubTrack={this.showSubTrack}/>;
      case 'DS' : return <DS showSubTrack={this.showTrack}/>;
      case 'PM' : return <PM showSubTrack={this.showSubTrack}/>;
      case 'HOME': return <Greeting trackSwitcher={(stateLink) => this.setState({rendWhat: stateLink})}/>; 
      case 'SUB_ENG' :return <Eng_d3 />;
      case 'SUB_PM' :return <PM_d3 />;
      case 'MAP' : return <MapContainer />;
      default: return <Greeting trackSwitcher={(stateLink) => this.setState({rendWhat: stateLink})}/>; 
  };
}

  render() {
    let homeBtn;
    let homeBtn2;
    let content;

    homeBtn = 
      <div className="navBar"> 
        <FontAwesomeIcon icon={faHome} id='home' onClick={this.goHome} size="2x" color="#544BF5"/>
        <FontAwesomeIcon icon={faMapMarkedAlt} id='map1' onClick={this.goMap} size="2x" color="#544BF5"/>
      </div>

    homeBtn2 = 
      <div className="homeBtn2"> 
        <FontAwesomeIcon icon={faHome} id='home' onClick={this.goHome} size="2x" color="#544BF5"/>
        <FontAwesomeIcon icon={faMapMarkedAlt} id='map1' onClick={this.goMap} size="2x" color="#544BF5"/>
      </div>    

    // renders the home page
    if (this.state.rendWhat === "HOME") {
      content = 
        <div>
        {this.showTrack()}
        </div>
    }

    // renders the sub track page with the courses d3 tree
    else if (this.state.rendWhat === "SUB_PM" | this.state.rendWhat === "SUB_ENG") {
      content = 
        <div className="tree">
          <div id="filler"></div>
            {homeBtn2}
          <div className="D3">
            {this.showTrack()}
          </div>
        </div>
    }
    
    // renders the google map using google map api
    else if (this.state.rendWhat === "MAP" ) {
      content = 
        <div className="tree">
          <div id="filler"></div>
          {homeBtn2}         
          {this.showTrack()}
          
        </div>
    }

    // renders the track page (the four tracks listed on the main page)
    else{
      content = 
        <div className="box">
          {this.showTrack()}
          {homeBtn}
        </div>
    }

    return (
      <div> 
      {content}
      </div>
    )

  }
};



// the track component for each of the four track listed on the home page
class UX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTrack:"",
    }
    this.chooseTrack = this.chooseTrack.bind(this);
  }

  chooseTrack = (e) => {
    e.preventDefault();

    switch(e.target.id) {
      case 'design':
        this.props.showSubTrack('design');
        break;
      case 'writing':
        this.props.showSubTrack('writing');
        break;
      case 'research':
        this.props.showSubTrack('research')
        break;
      case 'engineering':
        this.props.showSubTrack('engineering')
        break;
      default:
        this.props.showSubTrack('');
        break;
    }   
  };

  render() {

    return (
      <div className="trackGrid">
        <div className="sidebar">
          <div id="UX">
            <h1>User Experience</h1>  
            <p>Quo nibh tantas ea, vim in dicat diceret. Ferri facete vocibus duo ad, doctus democritum usu cu. No has dicam fabulas, ne cum justo choro, ad his duis erroribus persequeris. Ad natum rationibus consequuntur usu, no quando libris eripuit ius.
            </p>
            <ul>
              <li><a href='#' id='design' onClick={this.chooseTrack}>Design</a></li>
              <li><a href='#' id='writing' onClick={this.chooseTrack}>Writing</a></li>
              <li><a href='#' id='research' onClick={this.chooseTrack}>Research</a></li>
              <li><a href='#' id='engineering' onClick={this.chooseTrack}>Engineering</a></li>
            </ul>
          </div>
        </div>
        <UXImg/>
      </div>
    )
  }
};

// the track component for each of the four track listed on the home page
class SWE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTrack: "",
    }
    this.chooseTrack = this.chooseTrack.bind(this);
  }

  chooseTrack = (e) => {
    e.preventDefault();

    switch(e.target.id) {
      case 'front-end':
        this.props.showSubTrack('front-end');
        break;
      case 'back-end':
        this.props.showSubTrack('back-end');
        break;
      case 'dev-ops':
        this.props.showSubTrack('dev-ops')
        break;
      default:
        this.props.showSubTrack('');
        break;
    }   
  };
  
  render() {

    return (
      <div className="trackGrid">
        <div className="sidebar">
          <div id="SWE">
            <h1>Software Engineering</h1>  
            <p>Quo nibh tantas ea, vim in dicat diceret. Ferri facete vocibus duo ad, doctus democritum usu cu. No has dicam fabulas, ne cum justo choro, ad his duis erroribus persequeris. Ad natum rationibus consequuntur usu, no quando libris eripuit ius.
            </p>
            <ul>
              <li><a href='#' id='front-end' onClick={this.chooseTrack}>Front End</a></li>
              <li><a href='#' id='back-end' onClick={this.chooseTrack}>Back End</a></li>
            </ul>
          </div>
        </div>
       <SWEImg/>
      </div>
    )
  }

}

// the track component for each of the four track listed on the home page
class DS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTrack: "",
    }
    this.chooseTrack = this.chooseTrack.bind(this);
  }

  chooseTrack = (e) => {
    e.preventDefault();

    switch(e.target.id) {
      case 'machinelearn':
        this.props.showSubTrack('Machine Learning');
        break;
      case 'quantResearch':
        this.props.showSubTrack('Quant Research');
        break;
      case 'dataScientist':
        this.props.showSubTrack('Data Scientist')
        break;
      default:
        this.props.showSubTrack('');
        break;
    }   
  };
  
  render() {

    return (
      <div className="trackGrid">
        <div className="sidebar">
          <div id="DS">
            <h1>Data Science</h1>  
            <p>Quo nibh tantas ea, vim in dicat diceret. Ferri facete vocibus duo ad, doctus democritum usu cu. No has dicam fabulas, ne cum justo choro, ad his duis erroribus persequeris. Ad natum rationibus consequuntur usu, no quando libris eripuit ius.
            </p>
            <ul>
              <li><a href='#' id='machinelearn' onClick={this.chooseTrack}>Machine Learning</a></li>
              <li><a href='#' id='quantResearch' onClick={this.chooseTrack}>Quant Research</a></li>
              <li><a href='#' id='dataScientist' onClick={this.chooseTrack}>Data Scientist</a></li>
            </ul>
          </div>  
        </div>
      <DSImg/>
      </div>
    )
  }

}

// the track component for each of the four track listed on the home page
class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subTrack: "",
    }
    this.chooseTrack = this.chooseTrack.bind(this);
  }

  chooseTrack = (e) => {
    e.preventDefault();
    switch(e.target.id) {
      case 'productmanagement':
        this.props.showSubTrack('productmanagement');
        break;
      default:
        this.props.showSubTrack('');
        break;
    }   
  };
  render() {

    return (
      <div className="trackGrid">
      <div className="sidebar">
        <div id="PM">
          <h1>Product Management</h1>  
          <p>Quo nibh tantas ea, vim in dicat diceret. Ferri facete vocibus duo ad, doctus democritum usu cu. No has dicam fabulas, ne cum justo choro, ad his duis erroribus persequeris. Ad natum rationibus consequuntur usu, no quando libris eripuit ius.
          </p>
          <ul>
            <li><a href='#' id='productmanagement' onClick={this.chooseTrack}>Product Management</a></li>
          </ul>
        </div>
      </div>
      <PMImg/>
      </div>
    )
  }

}

export default TrackMain;
