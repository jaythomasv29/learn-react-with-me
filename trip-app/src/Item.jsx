export default function Item({ id, description, quantity, packed, togglePacked, deleteItem }) {
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
