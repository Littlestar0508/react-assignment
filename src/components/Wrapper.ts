import React from "../lib/react.js";
import ProfileButton from "./ProfileButton.js";
import ProfileText from "./ProfileText.js";
import InputProfileFile from "./InputProfileFile.js";

function Wrapper(props: { editProfile: () => void; changeImage: () => void }) {
  return React.createElement(
    // 프로필 설정하는 태그를 감싸기 위해 div로 설정
    "div",
    { className: "profile-edit-container" },
    React.createElement(ProfileButton, { editProfile: props.editProfile }),
    React.createElement(ProfileText),
    React.createElement(InputProfileFile, { changeImage: props.changeImage })
  );
}

export default Wrapper;
