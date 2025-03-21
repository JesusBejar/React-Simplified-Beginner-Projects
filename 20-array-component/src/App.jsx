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

  return (
    <div>
      <button onClick={removeFirstElement}>Remove first elemment</button>
      <br />
      <button onClick={() => removeSpecificLetter("C")}>Remove all C's</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add B to beginning</button>
      <br />
      <button onClick={() => addLetterToEnd("A")}>Add A to end</button>

      {array.join(", ")}
    </div>
  );
}

export default App;
