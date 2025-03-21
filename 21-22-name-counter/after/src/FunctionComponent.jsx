import { useState } from "react";

export function FunctionComponent() {
  const [name, setName] = setName("");
  const [age, setAge] = setAge(0);

  return (
    <div>
      <input value={name} onChange={(elment) => setName(elment.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and my age is {age}
    </div>
  );
}
