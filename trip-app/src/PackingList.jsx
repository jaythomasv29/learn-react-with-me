import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("completed");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => {
      const descA = a.description.toUpperCase();
      const descB = b.description.toUpperCase();
      if (descA < descB) {
        return -1;
      }
      if (descA > descB) {
        return 1;
      }
      return 0;
    });
  }
  if (sortBy === "completed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  const deleteItem = (id) => {
    // filter the item based on the id
    // filter it out
    // set the new state with the item filtered out
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const togglePacked = (id) => {
    // find the current by id
    // map it into a new array
    //set the state with the rest and newly modified item
    const foundItem = items.find((item) => item.id === id);
    const updatedItems = items.map((item) => {
      if (item.id === foundItem.id) {
        return { ...item, packed: !foundItem.packed };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const clearList = () => {
    if (window.confirm("Are you want to sure you clear list?")) setItems([]);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              togglePacked={() => togglePacked(item.id)}
              deleteItem={() => deleteItem(item.id)}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description (A-Z)</option>
          <option value="completed">Sort By Completed</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}