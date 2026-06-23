import React, { useState, useEffect } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1. Runs after EVERY render
  useEffect(() => {
    console.log("1. Runs on every render");
  });

  // 2. Runs ONLY once
  useEffect(() => {
    console.log("2. Component mounted");
  }, []);

  // 3. Runs when count changes
  useEffect(() => {
    console.log("3. Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}