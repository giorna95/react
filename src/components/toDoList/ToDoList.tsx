import React, { useState, useEffect } from 'react';
import ToDoListItem from './ToDoListItem';
import ListItemAdder from './ListItemAdder';

export default function ToDoList() {
  const [items, setItems] = useState<string[]>([]);

  const Delete = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const AddItem = (newItem: string) => {
    setItems([...items, newItem]);
  };

  const Reset = () => {
    setItems([]);
  };

  useEffect(() => {
    console.log("Lista aggiornata:", items);
  }, [items]);

  return (
    <div>
      <h1>To Do List</h1>
      <ListItemAdder onAddItem={AddItem} />
      <button onClick={Reset}>Reset</button>
      {items.map((item, index) => (
        <ToDoListItem
          key={index}
          item={item}
          index={index}
          onDelete={Delete}
        />
      ))}
    </div>
  );
}