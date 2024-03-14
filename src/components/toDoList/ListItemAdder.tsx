import React, { useState } from 'react';

interface ListItemAdderProps {
  onAddItem: (newItem: string) => void;
}

export default function ListItemAdder({ onAddItem }: ListItemAdderProps) {
  const [inputValue, setInputValue] = useState('');

  const Change = (event: any) => {
    setInputValue(event.target.value);
  };

  const AddItem = () => {
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={Change}
        placeholder="Add new item"
      />
      <button onClick={AddItem}>Add</button>
    </div>
  );
}