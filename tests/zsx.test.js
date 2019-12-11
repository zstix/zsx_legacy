import zsx from "../scripts/zsx";
import ReactDOM from "react-dom";

describe("invalid arguments", () => {
  test("no arguments", () => {
    try {
      zsx();
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("zsx: array data structure expected");
    }
  });

  test("array with no items", () => {
    try {
      zsx([]);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("zsx: array data structure expected");
    }
  });

  test("array with only a non-child item", () => {
    try {
      zsx([false]);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        "zsx: can not supply one item that is not a string, number, or array"
      );
    }
  });
});

describe("one argument", () => {
  test("string", () => {
    const root = document.createElement("div");
    const tree = zsx(["hello"]);

    ReactDOM.render(tree, root);
    expect(root.innerHTML).toBe("hello");
  });

  test.todo("child node");
  test.todo("multiple child nodes");
});

describe("two arguments", () => {
  test("tag and text", () => {
    const root = document.createElement("div");
    const tree = zsx(["p", "hello"]);

    ReactDOM.render(tree, root);
    expect(root.innerHTML).toBe("<p>hello</p>");
  });

  test("tag and properties", () => {
    const root = document.createElement("div");
    const tree = zsx(["div", { className: "bar" }]);

    ReactDOM.render(tree, root);
    expect(root.innerHTML).toBe('<div class="bar"></div>');
  });

  test("tag and child", () => {
    const root = document.createElement("div");
    const tree = zsx(["div", ["p", "hello"]]);

    ReactDOM.render(tree, root);
    expect(root.innerHTML).toBe("<div><p>hello</p></div>");
  });
});

describe("three arguments", () => {
  test("tag, props, text", () => {
    const root = document.createElement("div");
    const tree = zsx(["div", { className: "bar" }, "hello"]);

    ReactDOM.render(tree, root);
    expect(root.innerHTML).toBe('<div class="bar">hello</div>');
  });

  test.todo("tag, props, child");
});

describe("sibilings", () => {
  test.todo("tag and siblings");
  test.todo("tag, props, siblings");
});

describe("tree composition", () => {
  test.todo("tag and component");
  test.todo("tag, props, component");
});

describe("selectors", () => {
  test.todo("add a classname");
  test.todo("add an id");
  test.todo("add an id and a classname");
  test.todo("nesting"); // Fancy
});
