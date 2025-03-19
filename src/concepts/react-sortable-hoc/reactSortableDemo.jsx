// import { arrayMove } from 'array-move';
import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {
        items.map(item => {
          return (
            <SortableItem value={item} key={item} />
          );
        })
      }
    </ul>
  );
});

const SortableComponent = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    // // const newListOfItems = arrayMove(items, oldIndex, newIndex);
    // setItems(newListOfItems);
  };
  return (
    <SortableList items={items} onSortEnd={onSortEnd} />
  );
};

export default SortableComponent;