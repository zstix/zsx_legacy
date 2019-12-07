import ReactDOM from "react-dom";
import zsx from "./zsx";

const App = name => [
  "div",
  [
    ["h1", { className: "foo" }, `Hello, ${name}`],
    ["p", "this is neat"]
  ]
];

const root = document.getElementById("root");
const tree = zsx(App("Zack"));

ReactDOM.render(tree, root);
