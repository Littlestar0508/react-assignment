import React from "../lib/react.js";

function ProfileText() {
  return React.createElement("input", {
    className: "add-profile-text",
    type: "text",
    placeholder: "프로필 편집",
  });
}

export default ProfileText;
