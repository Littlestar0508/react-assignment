import Wrapper from "../components/Wrapper";
import ReactDOM from "../lib/react-dom/client.js";
import React from "../lib/react.js";

const ReactDOMRoot = ReactDOM.createRoot(document.getElementById("react"));

function changeImage() {
  const file = document.querySelector(".input-profile-file") as HTMLInputElement;
  const button = document.querySelector(".add-profile-btn") as HTMLButtonElement;
  const img = file.files ? file.files[0] : null;

  if (img) {
    const reader = new FileReader();

    reader.onload = (e: Event) => {
      button.style.backgroundImage = `url(${(e.target as FileReader).result})`;
      button.style.backgroundSize = "100px 100px";
    };

    reader.readAsDataURL(img);
  }
}

function editProfile() {
  const input = document.querySelector(".input-profile-file") as HTMLInputElement;
  input.click();
}

function render() {
  ReactDOMRoot.render(React.createElement(Wrapper, { editProfile, changeImage }));
}

render();
