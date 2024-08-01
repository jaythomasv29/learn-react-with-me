export default function Stats({ items }) {
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
        {percentage === 100 ? "100% completed" : `${percentage}% completed`} 🚀
      </em>
    </footer>
  );
}
