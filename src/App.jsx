import { useState } from "react";
import Calculator from "./components/calculator";
import CalculatorDarkMode from "./components/CalculatorDarkMode";
import MoonSvg from "./assets/svg/MoonSvg";

function App() {
  const [screen, setScreen] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [currentOperation, setCurrentOperation] = useState(0);
  return (
    <>
      {darkMode ? (
        <div className="bg-[#121212] flex flex-col gap-16 justify-center items-center min-h-screen">
          <MoonSvg setDarkMode={setDarkMode} darkMode={darkMode} />

          <h1 className="text-[#F5F5F5] font-bold text-3xl md:text-5xl mb-10">
            Calculator APP By Fer
          </h1>

          <div className="bg-[#2A2A2A] text-[#F5F5F5] flex justify-center items-center border border-black h-16 w-60 md:w-80 md:h-20 p-3.5 rounded-2xl text-xl">
            {screen}
          </div>

          <CalculatorDarkMode
            setCurrentOperation={setCurrentOperation}
            screen={screen}
            setScreen={setScreen}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-16 justify-center items-center min-h-screen">
          <MoonSvg setDarkMode={setDarkMode} darkMode={darkMode} />

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
      )}
    </>
  );
}

export default App;
