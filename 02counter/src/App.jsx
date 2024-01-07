import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addVlaue = () => {
    if (counter === 10) {
      return;
    } else {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    }
  };

  const removeVlue = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addVlaue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeVlue}>Remove value {counter}</button>
      <p>Footer{counter}</p>
    </>
  );
}

export default App;
