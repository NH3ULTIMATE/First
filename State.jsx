import React from "react";
import { useState } from "react";
import "./Child.css";
function Child() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="box">
        <h1> you clicked {count} times</h1>
        <button
          class="button"
          onClick={() =>
            setCount((val) => {
              return val - 1;
            })
          }
        >
          Remove
        </button>
        <button class="button" onClick={() => setCount((val) => val + 1)}>
          Add
        </button>
        <button class="button" onClick={() => setCount((val) => 0)}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Child;
