import { useState } from "react";

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

export default Form;