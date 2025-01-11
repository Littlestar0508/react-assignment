import React from "../lib/react.js";
import ProfileButton from "./ProfileButton";
import ProfileText from "./ProfileText";
import InputProfileFile from "./InputProfileFile.js";

function Wrapper(props: { size: string; image: string; editProfile: () => void; changeImage: () => void }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(ProfileButton, { editProfile: props.editProfile }),
    React.createElement(ProfileText),
    React.createElement(InputProfileFile, { changeImage: props.changeImage })
  );
}

export default Wrapper;
