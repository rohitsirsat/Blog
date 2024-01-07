import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function MyApp() {
  return (
    <div>
      <h1>custom react</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit goole",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    click me
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me dude"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // MyApp()
  // anotherElement
  reactElement
);
