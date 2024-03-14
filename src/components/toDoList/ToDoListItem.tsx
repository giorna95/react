import React from 'react';

interface ToDoListItemProps {
  item: string;
  index: number;
  onDelete: (index: number) => void;
}

export default function ToDoListItem({ item, index, onDelete }: ToDoListItemProps) {
  const Delete = () => {
    onDelete(index);
  };

  return (
    <div>
      <span>{item}</span>
      <button onClick={Delete}>X</button>
    </div>
  );
}