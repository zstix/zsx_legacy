import zsx from "../scripts/zsx";
import ReactDOM from "react-dom";

/* goal
['div', { className: 'bar' },
  ['p', 'hello world']]

["div", [
  ["h1", { className: "foo" }, `Hello, ${name}`],
  ["p", "this is neat"]
]];
*/

// Helper function to make tests simpler
const renderTree = data => {
  try {
    const root = document.createElement("div");
    const tree = zsx(data);

    ReactDOM.render(tree, root);
    const html = root.innerHTML;
    return { root, html };
  } catch (e) {
    throw new Error(`zsx tests: ${e}`);
  }
};

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
    const { html } = renderTree(["hello"]);
    expect(html).toBe("hello");
  });

  test.todo("child node");
  test.todo("multiple child nodes");
});

describe("two arguments", () => {
  test("tag and text", () => {
    const { html } = renderTree(["p", "hello"]);
    expect(html).toBe("<p>hello</p>");
  });

  test("tag and properties", () => {
    const { html } = renderTree(["div", { className: "bar" }]);
    expect(html).toBe('<div class="bar"></div>');
  });

  test("tag and child", () => {
    const { html } = renderTree(["div", ["p", "hello"]]);
    expect(html).toBe("<div><p>hello</p></div>");
  });
});

describe("three arguments", () => {
  test("tag, props, text", () => {
    const { html } = renderTree(["div", { className: "bar" }, "hello"]);
    expect(html).toBe('<div class="bar">hello</div>');
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

describe("random", () => {
  test("basic hello world", () => {
    const name = "Zack";
    const data = [
      "div",
      [
        ["h1", { className: "foo" }, `Hello, ${name}`],
        ["p", "this is neat"]
      ]
    ];
    const { html } = renderTree(data);
    expect(html).toBe(
      '<div><h1 class="foo">Hello, Zack</h1><p>this is neat</p></div>'
    );
  });
});
