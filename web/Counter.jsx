import * as React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
