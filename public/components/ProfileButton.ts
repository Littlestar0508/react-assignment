import React from "../lib/react.js";

function ProfileButton(props: { size: string; image: string; render: () => void }) {
  return React.createElement("button", {
    type: "button",
    className: "add-profile-btn",
    style: { backgroundImage: `${props.image}`, backgroundSize: props.size },
    onClick: () => {
      props.render();
    },
  });
}

export default ProfileButton;
