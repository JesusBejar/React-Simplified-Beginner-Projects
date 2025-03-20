import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  // slice and dice bb
  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1);
    });
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove first elemment</button>
      <br />

      {array.join(", ")}
    </div>
  );
}

export default App;
