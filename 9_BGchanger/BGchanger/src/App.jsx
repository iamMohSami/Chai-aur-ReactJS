import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("cyan");

  return (
    <div
      className="w-full h-screen"
      style={{ backgroundColor: color, border: "10px solid black" }}
    >
      <div className="bg-gray-600 fixed flex flex-wrap justify-around w-1/2 rounded-xl bottom-12 inset-x-1/4 px-2">
        <div>
          <button className="text-red-500" onClick={() => setColor("red")}>Red</button>
        </div>
        <div>
          <button className="text-green-500" onClick={() => setColor("green")}>Green</button>
        </div>
        <div>
          <button className="text-blue-500" onClick={() => setColor("blue")}>Blue</button>
        </div>
        <div>
          <button className="text-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
        </div>
        <div>
          <button className="text-orange-500" onClick={() => setColor("orange")}>Orange</button>
        </div>
        <div>
          <button className="text-purple-500" onClick={() => setColor("purple")}>Purple</button>
        </div>
        <div>
          <button className="text-pink-500" onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div>
    </div>
  );
}

export default App;
