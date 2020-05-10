// A more complete example of a ToDo app written in React with zsx

import { useState } from 'react'; // NOTE: we _only_ need useState
import ReactDom from 'react-dom';
import zsx from 'zsx';

const ToDoItem = ({ checked, desc }) => ['li',
  ['input', { type='checkbox', checked }],
  ['span', desc]
];

const ToDoList = items => ['ul', items.map(ToDoItem)];

const AddForm = onAdd => {
  const [value, setValue] = useState('');
  const handleClick = onAdd(value);
  
  return ['form',
    ['input', { type='text', value }],
    ['button', { type='button', onClick=handleClick }]
  ];
};

const App = () => {
  const [items, setItems] = useState([]);
  const onAdd = desc => setItems([...items, { desc, checked: false }]);
  
  return [ToDoList({ items }), AddForm({ onAdd })];
};
