import Wrapper from "../components/Wrapper";
import ReactDOM from "react-dom/client";
import { createElement } from "react";
import "../styles/main.css";

const ReactDOMRoot = ReactDOM.createRoot(
  document.getElementById("react") as HTMLDivElement
);

// input[type='file'] 설정 : 이미지 사용자의 개인 장소에서 가져오기
function changeImage() {
  const file = document.querySelector(
    ".input-profile-file"
  ) as HTMLInputElement;
  const button = document.querySelector(
    ".add-profile-btn"
  ) as HTMLButtonElement;
  const editIcon = document.querySelector(
    ".profile-edit-icon"
  ) as HTMLImageElement;

  // img가 null일 가능성 고려
  const img = file.files ? file.files[0] : null;

  // 선택된 img가 있을 시 실행
  if (img) {
    // 파일 정보를 저장하기 위한 FileReader
    const reader = new FileReader();

    // 파일 선택 시 동작
    reader.onload = (e: Event) => {
      // 버튼의 background-image 변경
      button.style.backgroundImage = `url(${(e.target as FileReader).result})`;
      button.style.backgroundSize = "100px 100px";
    };

    // 동작이 수행되었다면 프로필 이미지가 있으므로 display를 block 설정
    editIcon.style.display = "block";

    reader.readAsDataURL(img);
  }
}

// button을 클릭 시 input이 작동하도록 설정
function editProfile() {
  const input = document.querySelector(
    ".input-profile-file"
  ) as HTMLInputElement;
  input.click();
}

// Actual DOM에 렌더링
function render() {
  ReactDOMRoot.render(createElement(Wrapper, { editProfile, changeImage }));
}

render();
