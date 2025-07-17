import "./App.css";
import Navbar from "./components/navbar";
import Form from "./components/Form";
import { useState } from "react";
import Child from "./components/Child";

function App() {
  function cart() {
    const [count, setCount] = useState(0);
    <button onClick={setCount}>Add +</button>;
  }
  return (
    <div className="bg-green-100 min-h-screen ">
      <Navbar />
      <Form />
      <div className="box">
        <Child />
      </div>
    </div>
  );
}
