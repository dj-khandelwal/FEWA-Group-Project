import React from 'react';
import ReactDOM from 'react-dom';
import Geocode from "react-geocode";

const mapStyles = {
  map: {
    position: 'absolute',
    width: '60%',
    height: '100%'
  }
};
Geocode.setApiKey("####");
Geocode.enableDebug();

export class CurrentLocation extends React.Component {

    constructor(props) {
        super(props);

        let { lat, lng } = this.props.currentLocation;
        this.state = {
            zoom: 15,
            initialCenter: this.props.currentLocation,
            centerAroundCurrentLocation: false,
            visible: true,
            currentLocation: this.props.currentLocation,
            currLocName : this.props.currLocName
        };
      }
      
componentDidUpdate(prevProps, prevState) {
    console.log("====");
    console.log(this.props.currLocName);
    
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currLocName !== this.props.currLocName) {
      this.recenterMap();
    }
  }

  
 recenterMap() {
   
    const map = this.map;
    var current;
    Geocode.fromAddress(this.props.currLocName).then(
        response => {
          current = response.results[0].geometry.location;
          console.log(current);
          const google = this.props.google;
          const maps = google.maps;
      

          const mapRef = this.refs.map;

          // reference to the actual DOM element
          const node = ReactDOM.findDOMNode(mapRef);

          let zoom  = 16;
          const center = current;
          const mapConfig = Object.assign(
            {},
            {
              center: center,
              zoom: zoom
            }
          );
          // maps.Map() is constructor that instantiates the map
          this.map = new maps.Map(node, mapConfig);
          var marker = new google.maps.Marker({position: center, title:"Hello World!"});
          marker.setMap(this.map);
        },
        error => {
          console.error(error);
        }
      );
    
  }

  componentDidMount() {
    
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom  = this.state.zoom;
      const { lat, lng } = this.state.currentLocation;

      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);
   return (
     <div>
       <div style={style} ref="map">
         Loading map...
       </div>
       {this.renderChildren()}
     </div>
   );
 }
}
export default CurrentLocation;

