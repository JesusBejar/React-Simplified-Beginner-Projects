import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  // re-render log
  useEffect(() => {
    console.log("**Render**");
  });

  // on mount
  useEffect(() => {
    console.log("**Hi**");
  }, []);

  // logs age and name
  useEffect(() => {
    console.log(`My age ${age} and name ${name}`);
  }, [name, age]);

  // updates tab name with input
  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
