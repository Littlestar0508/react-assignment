import React from "../lib/react.js";
import ProfileButton from "./ProfileButton";
import ProfileText from "./ProfileText";

function Wrapper(props: { size: string; image: string; render: () => void }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(ProfileButton, { size: props.size, image: props.image, render: props.render }),
    React.createElement(ProfileText)
  );
}

export default Wrapper;
