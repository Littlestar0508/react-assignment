import React from "../lib/react.js";
import ProfileButton from "./ProfileButton.tsx";
import ProfileText from "./ProfileText.tsx";
import InputProfileFile from "./InputProfileFile.tsx";

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
