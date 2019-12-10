JSX aint great.

## The Problem

JSX is a fine solution to templating, but it comes with some drawbacks. One of the main arguments for using JSX is that it looks like regular HTML and is therefore easier to reason about when making web applications. However, as modern apps have gotten more complex, the implimentation of JSX has become more and more divergent of HTML. Some issues that I run into inculde:

* Context switching
* Extra steps needed for manupulation
  * Could be easier to compose or manipulate
* Verbose and cluttered syntax

```jsx
const ToDoItem = item => (
  <li>
    <input type="checkbox" checked={item.checked} />
    <span className="todo-desc">{item.description}</span>
  </li>
);

const ToDoList = items => {
  <ul>
    {items.map(item => <ToDo item={item} />}
  </ul>
}
```

## A Possible Solution

One possible solution, that I am attempting to explore is an alternative to JSX that is _just javascript_ and plays well with React and ReactDOM. There are other libraries that provide similar functionality (ijk and hiccup were major inspirations), but I wanted to create a simple interface using javascript data structures. This allows you to:

* Reduce context switching
* Enable simple and easy composition and manipulations
* Clean an compact syntax

```javascript
const ToDoItem = item => ['li',
  ['input', { type='checkbox', checked=item.checked}],
  ['span.desc', item.description]
];

const ToDoList = items => ['ul', items.map(ToDoItem)];
```

## To Do

* [ ] Get tests to pass
* [ ] Add emmet-style class names
* [ ] Create npm package
* [ ] Write article
* [ ] Iterate and improve
