import Wrapper from "../components/Wrapper";
import ReactDOM from "../lib/react-dom/client.js";
import React from "../lib/react.js";

const ReactDOMRoot = ReactDOM.createRoot(document.getElementById("react"));
ReactDOMRoot.render(React.createElement(Wrapper));
