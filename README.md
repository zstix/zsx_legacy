JSX aint great

## The Problem

TODO: fill this section out
* Context switching
* Extra steps needed for manupulation
  * Could be easier to compose or manipulate
* Verbose and cluttered syntax

```
const ToDoItem = item => (
  <li>
    <input type=checkbox checked={item.checked} />
    <span>{item.description}</span>
  </li>
);

const ToDoList = items => {
  <ul>
    {items.map(item => <ToDo item={item} />}
  </ul>
}
```

## A Possible Solution

```
const ToDoItem = item => ['li',
  ['input', { type="checkbox", checked=item.checked}],
  ['span', item.description]
];

const ToDoList = items => ['ul', items.map(ToDoItem)];
```
