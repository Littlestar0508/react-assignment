import Wrapper from "../components/Wrapper";
import ReactDOM from "../lib/react-dom/client.js";
import React from "../lib/react.js";

const ReactDOMRoot = ReactDOM.createRoot(document.getElementById("react"));

function render() {
  const image = `url(../src/10-1.webp)`;
  const size = "100px 100px";

  ReactDOMRoot.render(React.createElement(Wrapper, { image, size, render }));
}

function renderUpdate() {
  ReactDOMRoot.render(React.createElement(Wrapper, { render }));
}

renderUpdate();
