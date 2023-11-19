import React, { useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>count</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <span style={{ margin: "10px" }}>{count}</span>
        <button onClick={() => setCount(count - 1)}>Increase</button>
      </div>
    </div>
  );
};

export default Count;
