import ReactDOM from "react-dom";
import zsx from "./zsx";

const App = name => [
  "div",
  [
    ["h1", { className: "foo" }, `Hello, ${name}`],
    ["p", "this is neat"]
  ]
];

ReactDOM.render(zsx(App("Zack")), document.getElementById("root"));
