import React from "../lib/react.js";
import ProfileEdit from "./ProfileEdit.js";

function ProfileButton(props: { editProfile: () => void }) {
  return React.createElement(
    "button",
    {
      type: "button",
      className: "add-profile-btn",
      "aria-label": "프로필 사진 선택",
      onClick: () => {
        props.editProfile();
      },
    },
    React.createElement(ProfileEdit)
  );
}

export default ProfileButton;
