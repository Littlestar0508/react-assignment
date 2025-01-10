import React from "../lib/react.js";
import ProfileButton from "./ProfileButton";
import ProfileText from "./ProfileText";

function Wrapper() {
  return React.createElement(React.Fragment, null, React.createElement(ProfileButton), React.createElement(ProfileText));
}

export default Wrapper;
