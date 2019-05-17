import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // if statement below essentially, if true return summer, if false return winter
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  // helper function requires a latitude and month 0-11
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  return <div>Season display</div>;
};

export default SeasonDisplay;
