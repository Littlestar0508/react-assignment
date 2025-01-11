import React from "../lib/react.js";

function InputProfileFile(props: { changeImage: () => void }) {
  return React.createElement("input", {
    className: "input-profile-file",
    type: "file",
    accept: "image/*",
    style: {
      display: "none",
    },
    onChange: () => {
      props.changeImage();
    },
  });
}

export default InputProfileFile;
