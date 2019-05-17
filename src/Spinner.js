import React from "react";

const Spinner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  );
};

// in case we forgot to specify props.message in index, FOR FUTURE USE
// will default to this
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
