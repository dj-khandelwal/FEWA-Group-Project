import React, {Component} from "react"
import { GoogleApiWrapper } from 'google-maps-react';
import CurrentLocation from './Map';

class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {
        lat: 37.871853,
        lng: -122.258423
      },
      currLocName : "University of California, Berkeley"
    };
  
    onChange = (event) => {
      let temp = event.target.value;
  
      this.setState(state => ({
        showingInfoWindow: this.state.showingInfoWindow,
        activeMarker: this.state.activeMarker,
        selectedPlace: this.state.selectedPlace,
        currentLocation: {
          lat: this.state.lat,
          lng: this.state.lng
        },
        currLocName: temp
      }));
    };
  
    render() {
      return (
        <div class="mapGrid">
            <div className="mapSidebar">
            <h1>Campus Map</h1>  
          <p>Please select the building you'd like to locate.
          </p>
                <select id = "testing" onChange = {this.onChange}>
                    <option selected = "Berkeley" value="University of California, Berkeley">University of California, Berkeley</option>
                    <option value="South Hall, Berkeley">South Hall</option>
                    <option value="Soda Hall, Berkeley">Soda Hall</option>
                    <option value="Moffitt Library, Berkeley">Moffitt Library</option>
                    <option value="Dwinelle Hall, Berkeley">Dwinelle Hall</option>
                    <option value="Doe Library, Berkeley">Doe Library</option>
                    <option value="Evans Hall, Berkeley">Evans Hall</option>
                </select>
            </div>
              <div id="map">
              <CurrentLocation currentLocation = {this.state.currentLocation} currLocName = {this.state.currLocName}
              centerAroundCurrentLocation
              google={this.props.google}
              >
              </CurrentLocation>
            </div>
        </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDUOCAhzUKPSPGfjhV7ATHfL9U6amp5IXo'
  })(MapContainer);