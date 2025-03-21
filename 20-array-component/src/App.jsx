import { useState } from "react";

// don't be afraid to put static values outside of components
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

  function removeSpecificLetter(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove first elemment</button>
      <br />
      <button onClick={() => removeSpecificLetter("C")}>Remove all C's</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add B to beginning</button>
      <br />
      <button onClick={() => addLetterToEnd("A")}>Add A to end</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>

      {array.join(", ")}
    </div>
  );
}

export default App;
