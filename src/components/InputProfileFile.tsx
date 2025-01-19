import { createElement } from "react";

function InputProfileFile(props: { changeImage: () => void }) {
  return createElement("input", {
    className: "input-profile-file",
    id: "select-img",
    type: "file",
    // 파일의 유형을 image로 제한
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
