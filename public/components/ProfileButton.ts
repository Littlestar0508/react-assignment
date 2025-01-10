import React from "../lib/react.js";

function ProfileButton() {
  return React.createElement("button", {
    type: "button",
    className: "add-profile-btn",
    style: { backgroundImage: `url('../src/10-1.webp')`, backgroundSize: "100px 100px" },
  });
}

export default ProfileButton;
