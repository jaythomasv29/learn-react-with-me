import { useState } from "react";
import initialItems from "./list";

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🧳</h1>;
}

function Form({ items, setItems }) {
  const [quantity, setQuantity] = useState(1); // state for input element
  const [description, setDescription] = useState(""); // state for input element

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const resetForm = () => {
    setDescription("");
    setQuantity(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      quantity: Number(quantity),
      description,
      packed: false,
    };
    handleAddItem(newItem);
    resetForm();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
        id=""
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, setItems }) {
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

  return (
    <div className="list">
      <ul>
        {items.map((item) => {
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
    </div>
  );
}

function Item({ id, description, quantity, packed, togglePacked, deleteItem }) {

  return (
    <li>
      <input
        onChange={() => togglePacked(id)}
        type="checkbox"
        value={packed}
        defaultChecked={packed}
        name="isPacked"
        id=""
      />
      
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your checklist 🚀</em>
      </footer>
    );
    const numItems = items.length; // Derived state
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
  
  return (
    <footer className="stats">
      <em>
        You have packed {numPacked} of {numItems} items{" "}
        {percentage === 100 ? "100% completed" : `${percentage}% completed`}{" "}🚀
      </em>
    </footer>
  );
}

export default App;
