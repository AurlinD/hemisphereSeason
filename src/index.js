import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  //not required by react
  //very first function will be called when this class is created/instantiated
  //good location to initialize the state
  //constructor(props) {
  //app is extending from react component thus we need to call super. reference to parents construcotor
  //super(props);
  // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
  //this.state = { lat: null, errorMessage: "" };
  //}

  //other way to initialize state (SIMPLER)
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    // we called setstate!
    // will take a moment to wait for location to come
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // react says we have to define render for react.component
  // render gets called a bunch of times so you don't generally want code here
  // move it up to the constructor under the super and the initialization of state
  render() {
    // conditionally rendering content based on if error or lat is received
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      //return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner />;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
