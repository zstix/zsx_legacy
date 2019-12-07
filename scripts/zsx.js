import React from "react";

/* goal
['div', { className: 'bar' },
  ['p', 'hello world']]
*/

const zsx = node => {
  console.log("node", node);
  // if the wrong type of information, throw an error
  if (!Array.isArray(node) || !node.length) {
    throw new Error("zsx: array data structure expected");
  }

  // get the parts of this node (some may be undefined)
  let [componentOrTag, properties, children, sibling] = node;

  // if one item in array
  if (node.length === 1) {
    console.log("one");
    // if item is not the right type, throw an error
    if (!["string", "number"].includes(typeof componentOrTag)) {
      throw new Error(
        "zsx: can not supply one item that is not a string, number, or array"
      );
    }
    // if item is an array, pass it as a fragment
    if (Array.isArray(componentOrTag)) {
      return zsx([React.Fragment, null, componentOrTag]);
    }
    // if item is a string, just return it silly
    if (typeof componentOrTag === "string") {
      return componentOrTag;
    }
  }

  // if two items in array
  if (node.length === 2) {
    console.log("two");
    // if the second item is a string or number, shift params and recall
    if (["string", "number"].includes(typeof properties)) {
      return zsx([componentOrTag, null, properties]);
    }
    // if the second item is an array, shift params and spread them out (siblings)
    if (Array.isArray(properties)) {
      return zsx([componentOrTag, null, ...properties]);
    }
  }

  // if no children, set to an empty object (undefined causes issues)
  if (children === undefined) {
    children = [];
  }

  // if more than three items (siblings) combine recursively
  if (node.length > 3) {
    console.log("more");
    children = [...children, zsx(sibling)];
  }

  console.log("just right");

  // ensure properties is an object, even if it's empty
  properties = { ...properties };

  // TODO: nested attributes

  // TODO: selectors

  const args = [componentOrTag, properties].concat(children);
  console.log("createElement", args);
  return React.createElement.apply(React, args);
};

export default zsx;
