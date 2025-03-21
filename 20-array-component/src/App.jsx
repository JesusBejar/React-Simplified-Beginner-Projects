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

  function aToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ];
    });
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
      <br />
      <button onClick={aToH}>Update A to H</button>
      <br />
      <input
        value={value}
        onChange={(element) => setValue(element.target.value)}
      />
      <button onClick={() => addLetterToStart(value)}>
        Add input to array
      </button>
      <br />
      <button onClick={() => addLetterAtIndex("Z", 2)}>Add Z to index 2</button>
      <br />
      {array.join(", ")}
    </div>
  );
}

export default App;
