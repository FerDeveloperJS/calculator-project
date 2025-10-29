import { useState } from "react";
import Calculator from "./components/calculator";

function App() {
  const [screen, setScreen] = useState("");
  const [currentOperation, setCurrentOperation] = useState(0);
  return (
    <div className="flex flex-col gap-16 justify-center items-center min-h-screen">
      <h1 className="font-bold text-3xl md:text-5xl mb-10">
        Calculator APP By Fer
      </h1>
      <div className="flex justify-center items-center border border-black h-16 w-60 md:w-80 md:h-20 p-3.5 rounded-2xl text-xl">
        {screen}
      </div>
      <Calculator
        setCurrentOperation={setCurrentOperation}
        screen={screen}
        setScreen={setScreen}
      />
    </div>
  );
}

export default App;
