import { createElement } from "react";
import ProfileButton from "./ProfileButton.tsx";
import ProfileText from "./ProfileText.tsx";
import InputProfileFile from "./InputProfileFile.tsx";

function Wrapper(props: { editProfile: () => void; changeImage: () => void }) {
  return createElement(
    // 프로필 설정하는 태그를 감싸기 위해 div로 설정
    "div",
    { className: "profile-edit-container" },
    createElement(ProfileButton, { editProfile: props.editProfile }),
    createElement(ProfileText),
    createElement(InputProfileFile, { changeImage: props.changeImage })
  );
}

export default Wrapper;
