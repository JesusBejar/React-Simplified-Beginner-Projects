import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div onClick={() => setCounter((currentCount) => currentCount + 1)}>
      {counter}
    </div>
  );
}
