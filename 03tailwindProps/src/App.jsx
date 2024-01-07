import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObject = {
    username: "rohit",
    age: 21,
  };

  return (
    <>
      <h1 className="bg-green-600 text-black p-4 mb-4 rounded-xl">
        Tailwind CSS
      </h1>
      <Card username="Ana" btnText="click me" />
      <Card username="Emely" btnText="visite me" />
      <Card username="El" />
    </>
  );
}

export default App;
