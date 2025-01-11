import React from "../lib/react.js";

function ProfileText() {
  return React.createElement("input", {
    className: "add-profile-text",
    type: "text",
    placeholder: "프로필 편집",
    "aria-label": "프로필 닉네임 설정",
  });
}

export default ProfileText;
