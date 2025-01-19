import { createElement } from "react";
import ProfileEdit from "./ProfileEdit.tsx";

function ProfileButton(props: { editProfile: () => void }) {
  return createElement(
    "button",
    {
      type: "button",
      className: "add-profile-btn",
      "aria-label": "프로필 사진 선택",
      onClick: () => {
        props.editProfile();
      },
    },
    createElement(ProfileEdit)
  );
}

export default ProfileButton;
